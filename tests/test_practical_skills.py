"""Run every new answer against actual JS, Python, HTTP fixtures, and DOM events."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice
from test_learning_path import wait_for_check


def test_practical():
    blocks = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', 'import {practicalSections} from "./data/practical-skills.js"; import {domSections} from "./data/dom-practice.js"; console.log(JSON.stringify([...practicalSections,...domSections]));'], cwd=ROOT, text=True))
    assert sum(len(b['exercises']) for b in blocks) == 66
    server = ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread = threading.Thread(target=server.serve_forever,daemon=True); thread.start()
    url = f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context(); context.add_init_script("try { if (window === window.top) localStorage.setItem('daily-practice-editor','plain'); } catch {}");context.route('https://cdn.jsdelivr.net/**',lambda route:route.abort())
            page=context.new_page(); errors=[]; page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(url); page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            total=0
            for block in blocks:
                page.locator('#track-select').select_option(block['language']); select_level(page,block['id']); start_practice(page)
                for i,exercise in enumerate(block['exercises']):
                    assert page.locator('#offline-editor').input_value()==''
                    assert page.locator('#help-drawer').get_attribute('open') is None
                    assert page.locator('#results-panel').is_hidden()
                    page.locator('#offline-editor').fill(exercise['answer']); page.locator('#check-btn').click(); wait_for_check(page)
                    assert f"{len(exercise['tests'])}/{len(exercise['tests'])} tests passed" in page.locator('#check-result').inner_text(), (exercise['id'],page.locator('#output').inner_text(),page.locator('#case-list').inner_text())
                    assert page.locator("#reflection-details").get_attribute("open") is not None
                    total+=len(exercise['tests'])
                    if i<len(block['exercises'])-1: page.locator('#next-btn').click()
                page.locator('#back-to-home').click()
            assert total == 204
            print(f'PASS: 66 new exercises, {total} actual browser cases, both languages, real DOM events')
            # Editing cancels an old run; its result must not judge the new draft.
            page.locator('#track-select').select_option('javascript'); select_level(page,'practical-js-8'); start_practice(page); page.locator('#exercise-select').select_option('0')
            page.locator('#offline-editor').fill('async function practice_even(numbers) { await new Promise(resolve => setTimeout(resolve, 1000)); return numbers.filter(n => n % 2 === 0); }')
            page.locator('#check-btn').click()
            page.locator('#offline-editor').fill('function practice_even(numbers) { return []; }')
            assert page.locator('#check-btn').is_enabled()
            assert page.locator('#results-panel').is_hidden()
            page.wait_for_timeout(1200)
            assert page.locator('#check-result').inner_text() == ''
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '1/3 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#offline-editor').fill('function practice_even(numbers) { return numbers.filter(n => n % 2 === 0); }')
            page.locator('#back-to-home').click()
            # A hardcoded API result must fail the request/state assertions.
            page.locator('#track-select').select_option('javascript'); select_level(page,'practical-js-12'); start_practice(page); page.locator('#exercise-select').select_option('4')
            page.locator('#offline-editor').fill('async function practice_api_delete(id) { return true; }'); page.locator('#check-btn').click(); wait_for_check(page)
            assert '0/4 tests passed' in page.locator('#check-result').inner_text()
            assert 'Requests did not match' in page.locator('#case-list').inner_text()
            page.locator('#back-to-home').click()
            # Run produces an interactive opaque-origin DOM page.
            select_level(page,'practical-js-13'); start_practice(page); page.locator('#exercise-select').select_option('5'); page.locator('#run-btn').click()
            page.wait_for_function('!document.querySelector("#run-btn").disabled')
            frame=page.frame_locator('#dom-output iframe'); frame.locator('#task-title').fill('My task'); frame.locator('#task-form button').click(); assert frame.locator('li span').inner_text()=='My task'
            assert page.locator('#dom-output iframe').get_attribute('sandbox')=='allow-scripts allow-forms'
            page.locator('#back-to-home').click()
            # A cold offline tab can run new data, API, Python and DOM activities.
            server.shutdown(); context.set_offline(True); page.close(); page=context.new_page(); page.goto(url)
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            for language,level in [('javascript','practical-js-9'),('python','practical-py-9'),('javascript','practical-js-12'),('python','practical-py-12'),('javascript','practical-js-13')]:
                page.locator('#track-select').select_option(language); select_level(page,level); start_practice(page); page.locator('#exercise-select').select_option('0'); page.locator('#check-btn').click(); wait_for_check(page)
                assert 'tests passed. Explain' in page.locator('#check-result').inner_text(), page.locator('#output').inner_text()
                page.locator('#back-to-home').click()
            page.set_viewport_size({'width':320,'height':640}); assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
            assert not errors,errors
            print('PASS: API shortcuts rejected; live DOM preview; cold offline JS/Python/API/DOM; narrow layout')
            browser.close()
    finally:
        if thread.is_alive(): server.shutdown()
        server.server_close()

if __name__=='__main__': test_practical()
