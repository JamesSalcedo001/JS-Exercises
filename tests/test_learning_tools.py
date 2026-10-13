"""Recall scheduling and learner-written tests in both offline runtimes."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice
from test_learning_path import wait_for_check


def test_tools():
    subprocess.run(['node', '--input-type=module', '-e', '''
import assert from 'node:assert/strict';
import {recordPractice, reviewQueue} from './review.js';
const now = 1000, day = 86400000;
let r = recordPractice(null, {passed:true, independent:true}, now);
assert.equal(r.due, now+day);
r = recordPractice(r, {passed:true, independent:true, recall:true}, now);
assert.equal(r.recalls, 1); assert.equal(r.due, now+3*day);
r = recordPractice(r, {passed:true, independent:false, recall:true}, now);
assert.equal(r.recalls, 1); assert.equal(r.due, now+day);
r = recordPractice(r, {passed:false, recall:true}, now);
assert.equal(r.due, now);
const route = [{exercises:[{id:'a'},{id:'b',mode:'debug'},{id:'c'}]}];
assert.deepEqual(reviewQueue(route,{completed:{a:true,b:true,c:true},reviews:{c:{due:now+day}}},now).map(x=>x.exercise.id), ['a']);
console.log('PASS: review intervals, help, failures and old-progress migration');
'''], cwd=ROOT, check=True)
    server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(ROOT)))
    thread = threading.Thread(target=server.serve_forever, daemon=True); thread.start()
    url = f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'), args=['--no-sandbox'])
            context = browser.new_context(**p.devices['iPhone 13'])
            page = context.new_page(); errors=[]; page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(url); page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            # Existing completion/draft data gains review without erasing old work.
            original='function minutes(hours) { return hours * 60; }'
            page.evaluate('data=>localStorage.setItem("daily-coding-practice-v1",JSON.stringify(data))', {
                'language':'javascript','completed':{'js-function':True},'drafts':{'js-function':original},'projectFlowVersion':2})
            page.reload(); open_dropdown(page, 'recall-practice')
            assert page.locator('#recall-list button').count()==1
            page.locator('#recall-list button').first.tap()
            assert page.locator('#offline-editor').input_value()==''
            assert page.evaluate('JSON.parse(localStorage.getItem("daily-coding-practice-v1")).backups["js-function"]')==original
            page.locator('#offline-editor').fill('function hoursToMinutes(hours) { return hours * 60; }\nconsole.log(hoursToMinutes(2));\nconsole.log(hoursToMinutes(0.5));\nconsole.log(hoursToMinutes(0));')
            page.locator('#check-btn').tap(); wait_for_check(page)
            assert 'Output matches' in page.locator('#check-result').inner_text()
            review=page.evaluate('JSON.parse(localStorage.getItem("daily-coding-practice-v1")).reviews["js-function"]')
            assert review['recalls']==1
            page.locator('#back-to-home').tap(); open_dropdown(page,'recall-practice')
            assert page.locator('#recall-list button').count()==0
            # Test ordinary function exercises: predictions never mark a lesson complete.
            for language,prefix in [('javascript','js'),('python','py')]:
                page.locator('#track-select').select_option(language)
                select_level(page,f'practical-{prefix}-8'); start_practice(page)
                code='function practice_even(numbers) { return numbers.filter(n => n % 2 === 0); }' if prefix=='js' else 'def practice_even(numbers):\n    return [n for n in numbers if n % 2 == 0]'
                page.locator('#offline-editor').fill(code); open_dropdown(page,'experiment-details')
                page.locator('#experiment-args').fill('[[0, -2, 3, 4, 4]]'); page.locator('#experiment-expected').fill('[0, -2, 4, 4]')
                page.locator('#experiment-run').tap(); page.wait_for_function('document.querySelector("#experiment-result").textContent.startsWith("Your prediction matches")')
                assert not page.evaluate('(id)=>Boolean(JSON.parse(localStorage.getItem("daily-coding-practice-v1")).completed[id])', f'practical-{prefix}-even')
                page.locator('#experiment-expected').fill('[]'); page.locator('#experiment-run').tap()
                page.wait_for_function('document.querySelector("#experiment-result").textContent.startsWith("Prediction:")')
                page.locator('#experiment-args').fill('not JSON'); page.locator('#experiment-run').tap()
                assert 'input format' in page.locator('#experiment-result').inner_text()
                page.locator('#experiment-args').fill('[[]]'); page.locator('#experiment-expected').fill('[]')
                page.locator('#experiment-run').tap(); page.wait_for_function('document.querySelector("#experiment-result").textContent.startsWith("Your prediction matches")')
                page.locator('#offline-editor').fill('bad code'); page.locator('#check-btn').tap(); wait_for_check(page)
                assert page.locator('#debug-coach').is_visible()
                page.locator('#back-to-home').tap()
            # Next-block navigation follows the interleaved foundations/projects.
            page.locator('#track-select').select_option('javascript')
            select_level(page,'practical-js-10'); start_practice(page)
            for last_index,next_title in [('5','Create a page document'),('5','Change one heading'),('5','Build the shopping form'),('7','Create a task')]:
                page.locator('#exercise-select').select_option(last_index)
                page.locator('#next-block-btn').tap()
                assert page.locator('#activity-title').inner_text()==next_title
            page.locator('#back-to-home').tap(); page.locator('#track-select').select_option('python')
            context.set_offline(True)
            cold=context.new_page(); cold.goto(url)
            select_level(cold,'practical-py-8'); start_practice(cold)
            cold.locator('#offline-editor').fill('def practice_even(numbers):\n    return [n for n in numbers if n % 2 == 0]')
            open_dropdown(cold,'experiment-details')
            assert cold.locator('#experiment-args').input_value()=='[[]]'
            cold.locator('#experiment-run').tap(); cold.wait_for_function('document.querySelector("#experiment-result").textContent.startsWith("Your prediction matches")')
            cold.set_viewport_size({'width':320,'height':568})
            assert cold.evaluate('document.documentElement.scrollWidth<=innerWidth')
            assert not errors, errors
            browser.close()
            print('PASS: recall from blank preserves drafts; JS/Python custom tests, format errors, prediction failures, debug guidance, saved inputs and cold offline phone use')
    finally:
        server.shutdown(); server.server_close(); thread.join(timeout=2)


if __name__=='__main__': test_tools()
