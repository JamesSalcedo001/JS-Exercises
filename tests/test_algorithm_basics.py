"""Beginner traces, cost explanations, both coding tracks and cold offline use."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice
from test_learning_path import wait_for_check


def test_algorithms():
    blocks=json.loads(subprocess.check_output(['node','--input-type=module','-e','import {algorithmSections} from "./data/algorithm-basics.js"; console.log(JSON.stringify(algorithmSections));'],cwd=ROOT,text=True))
    subprocess.run(['node','--input-type=module','-e','''
import assert from 'node:assert/strict';
import {sections} from './sections.js';
import {learningRoute,lessonTrail} from './learning-flow.js';
for(const language of ['javascript','python']) {
  const prefix=language==='python'?'py':'js', route=learningRoute(sections,language);
  assert.equal(route[route.findIndex(s=>s.id===`path-${prefix}-4`)-1].id,`algorithm-${prefix}-basics`);
  const trail=lessonTrail(sections,language,`path-${prefix}-binary-search`);
  assert.ok(trail.reviews.some(r=>r.exercise.id===`algorithm-${prefix}-halving`));
  assert.ok(sections.filter(s=>s.id?.startsWith(`path-${prefix}-`)).every(s=>s.exercises.every(e=>e.analysis)));
}
'''],cwd=ROOT,check=True)
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context(**p.devices['iPhone 13']);page=context.new_page()
            errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            open_dropdown(page,'learning-resources');page.locator('#start-algorithms').tap()
            assert page.locator('#activity-title').inner_text()=='Write down each running total'
            open_dropdown(page,'help-drawer');open_dropdown(page,'algorithm-guide')
            page.locator('#algorithm-guide-body > details').nth(0).locator('summary').tap()
            assert page.locator('#trace-rows tr').count()==1
            for step,total in enumerate([2,6,7,7],start=1):
                page.locator('#trace-next').tap()
                assert page.locator('#trace-rows tr').count()==step+1
                assert page.locator('#trace-rows tr').last.locator('td').last.inner_text()==str(total)
            assert page.locator('#trace-next').is_disabled()
            page.locator('#trace-reset').tap();assert page.locator('#trace-rows tr').count()==1
            page.locator('#algorithm-guide-body > details').nth(2).locator('summary').tap()
            page.locator('#growth-size').select_option('8')
            assert '64 inner visits' in page.locator('#growth-counts').inner_text()
            assert '3 divisions' in page.locator('#growth-counts').inner_text()
            page.locator('#growth-size').select_option('16')
            assert '256 inner visits' in page.locator('#growth-counts').inner_text()
            assert '4 divisions' in page.locator('#growth-counts').inner_text()
            page.locator('#algorithm-guide-body > details').nth(5).locator('summary').tap()
            page.locator('[data-cost=quadratic]').tap();assert '6, not 9' in page.locator('#cost-feedback').inner_text()
            page.locator('[data-cost=linear]').tap();assert 'O(1) extra space' in page.locator('#cost-feedback').inner_text()
            page.set_viewport_size({'width':320,'height':568});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
            page.locator('#back-to-home').tap()
            cases=0
            for block in blocks:
                page.locator('#track-select').select_option(block['language'])
                select_level(page,block['id']);start_practice(page)
                for index,exercise in enumerate(block['exercises']):
                    page.locator('#exercise-select').select_option(str(index))
                    page.locator('#offline-editor').fill(exercise['answer']);page.locator('#check-btn').tap();wait_for_check(page)
                    assert f'{len(exercise["tests"])}/{len(exercise["tests"])} tests passed' in page.locator('#check-result').inner_text(),exercise['id']
                    cases+=len(exercise['tests'])
                    open_dropdown(page,'solution-details');page.locator('#answer-btn').tap()
                    assert exercise['analysis'] in page.locator('#answer-analysis').inner_text()
                page.locator('#next-block-btn').tap()
                assert page.locator('#activity-title').inner_text()=='Find the largest value'
                page.locator('#earlier-lessons summary').tap()
                assert 'running total' in page.locator('#lesson-review-list').inner_text()
                page.locator('#back-to-home').tap()
            context.set_offline(True);cold=context.new_page();cold.goto(url)
            select_level(cold,'algorithm-py-basics');start_practice(cold)
            cold.locator('#exercise-select').select_option('5');cold.locator('#offline-editor').fill(blocks[1]['exercises'][5]['answer'])
            cold.locator('#check-btn').tap();wait_for_check(cold)
            assert '5/5 tests passed' in cold.locator('#check-result').inner_text()
            open_dropdown(cold,'algorithm-guide');cold.locator('#algorithm-guide-body > details').nth(0).locator('summary').tap()
            cold.locator('#trace-next').tap();assert cold.locator('#trace-rows tr').count()==2
            assert not errors,errors
            browser.close();print(f'PASS: 16 new exercises, {cases} function cases, variable trace, growth comparison, self-check feedback, reference costs, DSA links, 320px layout and cold offline Python/guide')
    finally:
        server.shutdown();server.server_close();thread.join(timeout=2)


if __name__=='__main__':test_algorithms()
