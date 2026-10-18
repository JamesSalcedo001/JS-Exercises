"""Guided projects, responsive layout, independent challenges, review and export."""
import functools
import json
import os
import subprocess
import tempfile
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice
from test_learning_path import wait_for_check


def test_projects():
    blocks=json.loads(subprocess.check_output(['node','--input-type=module','-e','import {projectSections} from "./data/projects.js"; console.log(JSON.stringify(projectSections));'],cwd=ROOT,text=True))
    assert len(blocks)==4 and sum(len(b['exercises']) for b in blocks)==30
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context();context.route('https://cdn.jsdelivr.net/**',lambda route:route.abort())
            page=context.new_page();errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            assert page.locator('#build-projects').get_attribute('open') is None
            cases=0
            for block in blocks:
                page.locator('#track-select').select_option(block['language']);open_dropdown(page,'build-projects')
                page.locator('#project-list button').filter(has_text=block['title']).click()
                for i,exercise in enumerate(block['exercises']):
                    if exercise.get('continuesFrom'):
                        prior=next(e for e in block['exercises'] if e['id']==exercise['continuesFrom'])
                        assert page.locator('#offline-editor').input_value()==prior['answer']
                    elif exercise['mode']=='debug':assert page.locator('#offline-editor').input_value()==exercise['snippet']
                    else:assert page.locator('#offline-editor').input_value()==''
                    if exercise.get('markupAnswer'):
                        open_dropdown(page,'project-markup');page.locator('#markup-editor').fill(exercise['markupAnswer'])
                    assert page.locator('#project-guide').is_visible()==bool(exercise['guide'])
                    if exercise['mode']=='guided':assert page.locator('#project-guide').get_attribute('open') is not None
                    if exercise['mode']=='challenge':assert page.locator('#project-guide').is_hidden()
                    page.locator('#offline-editor').fill(exercise['answer']);page.locator('#check-btn').click();wait_for_check(page)
                    assert f"{len(exercise['tests'])}/{len(exercise['tests'])} tests passed" in page.locator('#check-result').inner_text(),(exercise['id'],page.locator('#output').inner_text(),page.locator('#case-list').inner_text())
                    if exercise['mode']=='guided':assert 'Checked with help' in page.locator('#exercise-progress').inner_text()
                    if exercise['mode']=='challenge':assert 'Solved without help' in page.locator('#exercise-progress').inner_text()
                    cases+=len(exercise['tests'])
                    if i<len(block['exercises'])-1:page.locator('#next-btn').click()
                page.locator('#back-to-home').click()
            assert page.evaluate('JSON.parse(localStorage.getItem("daily-coding-practice-v1")).lastPractice') == {}
            assert cases==239
            print(f'PASS: all 30 project answers, {cases} cases, layout at 320/640px, storage reloads and route decisions')
            # Broken starter code must actually expose the bug.
            for block in blocks:
                exercise_index=next(i for i,e in enumerate(block['exercises']) if e['mode']=='debug')
                page.locator('#track-select').select_option(block['language']);open_dropdown(page,'build-projects');page.locator('#project-list button').filter(has_text=block['title']).click();page.locator('#exercise-select').select_option(str(exercise_index))
                page.locator('#offline-editor').fill(block['exercises'][exercise_index]['snippet']);page.locator('#check-btn').click();wait_for_check(page)
                assert 'Start with the first failing case' in page.locator('#check-result').inner_text()
                page.locator('#back-to-home').click()
            # Review assisted work, retry from blank, and restore the prior draft.
            open_dropdown(page,'project-review');assert page.locator('#review-list button').count()>0
            page.locator('#review-list button').first.click();old=page.locator('#offline-editor').input_value();assert old
            page.locator('#retry-blank').click();assert page.locator('#offline-editor').input_value()=='';assert page.locator('#project-guide').get_attribute('open') is None
            open_dropdown(page,'editor-tools');page.locator('#restore-draft').click();assert page.locator('#offline-editor').input_value()==old
            page.locator('#back-to-home').click()
            # Export a real HTML page and run it outside the preview storage fixture.
            page.locator('#track-select').select_option('javascript');open_dropdown(page,'build-projects');page.locator('#project-list button').filter(has_text=blocks[1]['title']).click();page.locator('#exercise-select').select_option(str(len(blocks[1]['exercises'])-1))
            page.locator('#offline-editor').fill(blocks[1]['exercises'][-1]['answer']);open_dropdown(page,'editor-tools')
            with page.expect_download() as download:page.locator('#export-project').click()
            with tempfile.TemporaryDirectory() as directory:
                path=os.path.join(directory,'packing.html');download.value.save_as(path)
                export_server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=directory))
                threading.Thread(target=export_server.serve_forever,daemon=True).start()
                try:
                    exported=context.new_page();exported.goto(f'http://localhost:{export_server.server_port}/packing.html');exported.locator('#task-title').fill('Socks');exported.locator('#quantity').fill('2');exported.locator('#task-form button').click();assert exported.locator('li span').inner_text()=='Socks × 2';exported.reload();assert exported.locator('li span').inner_text()=='Socks × 2';exported.close()
                finally:export_server.shutdown();export_server.server_close()
            # Remove a required UI part: the challenge checks should reject it.
            page.locator('#offline-editor').fill('function setupDOM() {}');page.locator('#check-btn').click();wait_for_check(page);assert '0/5 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#offline-editor').fill(blocks[1]['exercises'][-1]['answer']);page.locator('#back-to-home').click()
            server.shutdown();context.set_offline(True);page.close();page=context.new_page();page.goto(url)
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            assert page.evaluate('fetch("projects/task-api/task-api.zip").then(r => r.arrayBuffer()).then(b => b.byteLength)') == (ROOT/'projects/task-api/task-api.zip').stat().st_size
            for block,index in [(block,len(block['exercises'])-1) for block in blocks]:
                page.locator('#track-select').select_option(block['language']);open_dropdown(page,'build-projects');page.locator('#project-list button').filter(has_text=block['title']).click();page.locator('#exercise-select').select_option(str(index));page.locator('#check-btn').click();wait_for_check(page)
                assert 'tests passed. Explain' in page.locator('#check-result').inner_text(),page.locator('#output').inner_text()
                page.set_viewport_size({'width':320,'height':740});assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
                page.locator('#back-to-home').click()
            assert not errors,errors
            print('PASS: real debugging failures; assisted review/retry; exported page persists; all four project challenges run cold offline')
            browser.close()
    finally:
        if thread.is_alive():server.shutdown()
        server.server_close()

if __name__=='__main__':test_projects()
