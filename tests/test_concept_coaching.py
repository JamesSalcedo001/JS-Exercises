"""Concrete concept coaching, structure choices and optional transfer practice."""
import functools
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice
from test_learning_path import wait_for_check


def test_coaching():
    subprocess.run(['node','--input-type=module','-e','''
import assert from 'node:assert/strict';
import {sections} from './sections.js';
import {conceptFor,dataShapes} from './data/concept-lessons.js';
import {lessonTrail} from './learning-flow.js';
const practical=sections.filter(s=>s.id?.startsWith('practical-')&&!s.exercises[0].dom);
let count=0;
for(const section of practical) for(const exercise of section.exercises){
  const coach=conceptFor(exercise,section.language);
  assert.ok(coach?.lesson && coach?.use && coach?.mistake && coach?.plan,exercise.id);
  assert.ok(!coach.lesson.includes('Tool to try:'),exercise.id);count++;
}
assert.equal(count,60);
for(const item of Object.values(dataShapes)) for(const key of ['jsId','pyId']) assert.ok(sections.some(s=>s.exercises.some(e=>e.id===item[key])),item[key]);
const trail=lessonTrail(sections,'python','practical-py-names');
assert.ok(trail.reviews.some(r=>r.exercise.id==='py-dictionary'));
console.log('PASS: all 60 coaching entries, structure exercise links, Python foundation references');
'''],cwd=ROOT,check=True)
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context(**p.devices['iPhone 13']);page=context.new_page();errors=[]
            page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            for language,prefix in [('javascript','js'),('python','py')]:
                page.locator('#track-select').select_option(language)
                open_dropdown(page,'data-shapes')
                for shape in ['list','record','lookup','set','stack']:
                    page.locator('#data-shape').select_option(shape)
                    assert page.locator('#shape-why').inner_text()
                    if shape=='stack':assert ('append' if prefix=='py' else 'push') in page.locator('#shape-example').inner_text()
                    page.locator('#shape-practice').tap()
                    assert page.locator('#activity-title').inner_text()
                    assert page.locator('#function-signature').is_visible() or page.locator('#question-text').is_visible()
                    page.locator('#back-to-home').tap();open_dropdown(page,'data-shapes')
                select_level(page,f'practical-{prefix}-8');start_practice(page)
                assert ('comprehension' if prefix=='py' else 'arrow function') in page.locator('#lesson').inner_text()
                assert page.locator('#concept-use-case').get_attribute('open') is None
                page.locator('#concept-use-case summary').tap()
                assert 'available products' in page.locator('#concept-use').inner_text()
                assert 'Zero' in page.locator('#concept-mistake').inner_text()
                assert 'yes/no question' in page.locator('#plan-input').get_attribute('placeholder')
                if prefix=='js':page.screenshot(path='/tmp/concept-coaching.png')
                page.set_viewport_size({'width':320,'height':568});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
                page.locator('#offline-editor').fill('function practice_even(numbers) { return []; }' if prefix=='js' else 'def practice_even(numbers):\n    return []')
                page.locator('#check-btn').tap();wait_for_check(page)
                assert page.locator('#case-list > .case-fail').count()==1
                assert page.locator('#remaining-cases').get_attribute('open') is None
                assert page.locator('#case-list .case-row').count()==3
                page.locator('#remaining-cases > summary').tap()
                assert page.locator('#remaining-cases .case-pass').is_visible()
                page.locator('#back-to-home').tap()
                select_level(page,f'practical-{prefix}-12');start_practice(page)
                page.locator('#exercise-select').select_option('4')
                assert 'no body' in page.locator('#lesson').inner_text()
                page.locator('#reflection-details > summary').tap()
                assert page.locator('#transfer-challenge').get_attribute('open') is None
                page.locator('#transfer-challenge summary').tap()
                assert 'original task' in page.locator('#transfer-challenge').inner_text()
                page.locator('#back-to-home').tap()
            context.set_offline(True);cold=context.new_page();cold.goto(url)
            select_level(cold,'practical-py-8');start_practice(cold)
            open_dropdown(cold,'learn-step')
            assert 'comprehension' in cold.locator('#lesson').inner_text()
            cold.locator('#back-to-home').tap();open_dropdown(cold,'data-shapes');cold.locator('#data-shape').select_option('stack')
            assert 'append' in cold.locator('#shape-example').inner_text()
            assert not errors,errors
            browser.close();print('PASS: JS/Python structure practice links, contextual examples, mistakes, planning prompts, optional variations, 320px fit and cold offline coaching')
    finally:
        server.shutdown();server.server_close();thread.join(timeout=2)


if __name__=='__main__':test_coaching()
