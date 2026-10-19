"""Touch-device layouts, coding controls, recommendation, continuity and migration."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown
from test_learning_path import wait_for_check


def test_phone():
    projects=json.loads((ROOT/'data/projects.js').read_text().split('export const projectSections = ',1)[1].rstrip(';\n'))
    flight=json.loads(subprocess.check_output(['node','--input-type=module','-e','import {flightSections} from "./data/flight-practice.js"; console.log(JSON.stringify(flightSections));'],cwd=ROOT,text=True))
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context(**p.devices['iPhone 13'])
            cdn=[];context.on('request',lambda request:cdn.append(request.url) if 'cdn.jsdelivr.net' in request.url else None)
            page=context.new_page();page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            assert page.locator('#choose-step').get_attribute('open') is None
            assert 'Values' in page.locator('#recommended-description').inner_text()
            page.locator('#recommended-start').tap()
            assert page.locator('#phone-code-tools').is_visible()
            assert page.locator('#phone-code-tools').get_attribute('open') is None
            open_dropdown(page,'phone-code-tools')
            assert page.locator('#offline-editor').evaluate('el=>getComputedStyle(el).fontSize')=='16px'
            assert page.locator('#offline-editor').get_attribute('autocorrect')=='off'
            page.locator('#offline-editor').focus();page.locator('#offline-editor').press_sequentially('(')
            assert page.locator('#offline-editor').input_value()=='()'
            assert page.locator('#offline-editor').evaluate('el=>el.selectionStart')==1
            page.locator('#offline-editor').press_sequentially(')')
            assert page.locator('#offline-editor').input_value()=='()'
            page.locator('#offline-editor').fill('if (true) {');page.locator('#offline-editor').press('End');page.locator('#offline-editor').press('Enter')
            assert page.locator('#offline-editor').input_value()=='if (true) {\n    '
            page.locator('#phone-code-tools details > summary').tap();page.locator('[data-code-insert=":"]').tap()
            assert page.locator('#offline-editor').input_value().endswith(':')
            page.locator('[data-code-action="undo"]').tap();assert page.locator('#offline-editor').input_value()=='if (true) {\n    '
            page.locator('#offline-editor').fill('first\nsecond');page.locator('#offline-editor').evaluate('el=>el.setSelectionRange(0,el.value.length)');page.locator('[data-code-action="indent"]').tap();assert page.locator('#offline-editor').input_value()=='    first\n    second'
            for size in [(320,568),(375,667),(390,844),(844,390)]:
                page.set_viewport_size({'width':size[0],'height':size[1]})
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
            for button in page.locator('#phone-code-tools button').all():
                if button.is_visible():assert button.bounding_box()['height']>=44
            page.locator('#offline-editor').fill(flight[0]['exercises'][0]['answer']);page.locator('#check-btn').tap();wait_for_check(page)
            assert 'Output matches' in page.locator('#check-result').inner_text()
            assert page.locator('#offline-editor').evaluate('el=>document.activeElement!==el')
            page.locator('#back-to-home').tap();page.locator('#recommended-start').tap()
            assert page.locator('#exercise-select').input_value()=='1'
            assert page.locator('#lesson-position').inner_text().startswith('Lesson 2 of ')
            page.locator('#offline-editor').fill('// keep this draft while reviewing')
            page.locator('#earlier-lessons summary').tap()
            page.locator('#lesson-review-list button').first.tap()
            assert page.locator('#lesson-position').inner_text().startswith('Lesson 1 of ')
            page.locator('#return-to-lesson').tap()
            assert page.locator('#offline-editor').input_value()=='// keep this draft while reviewing'
            page.locator('#offline-editor').fill('// my next attempt');page.locator('#back-to-home').tap();page.reload();page.locator('#recommended-start').tap()
            assert page.locator('#offline-editor').input_value()=='// my next attempt'
            page.locator('#back-to-home').tap()
            open_dropdown(page,'build-projects');page.locator('#project-list button').first.tap()
            custom=projects[0]['exercises'][0]['answer'].replace('My first page','My phone project')
            page.locator('#offline-editor').fill(custom);page.locator('#check-btn').tap();wait_for_check(page)
            page.locator('#next-btn').tap();assert page.locator('#offline-editor').input_value()==custom
            # Later untested edits cannot overwrite the previous passing version.
            page.locator('#exercise-select').select_option('0');page.locator('#offline-editor').fill('<p>unfinished edit</p>');page.locator('#next-btn').tap()
            assert page.locator('#offline-editor').input_value()==custom
            page.locator('#offline-editor').fill(projects[0]['exercises'][1]['answer'].replace('Sam Lee','My phone project'));page.locator('#check-btn').tap();wait_for_check(page)
            assert '1/1 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#back-to-home').tap()
            # Page HTML, too, is owned by the learner and carried into behavior steps.
            open_dropdown(page,'build-projects');page.locator('#project-list button').filter(has_text=projects[1]['title']).tap()
            page.locator('#offline-editor').fill(projects[1]['exercises'][0]['answer']);page.locator('#check-btn').tap();wait_for_check(page);page.locator('#next-btn').tap()
            open_dropdown(page,'project-markup');assert page.locator('#markup-editor').input_value()==projects[1]['exercises'][0]['answer']
            page.locator('#markup-editor').focus();open_dropdown(page,'phone-code-tools');page.locator('#phone-code-tools details > summary').tap();page.locator('[data-code-insert="<"]').tap();assert page.locator('#markup-editor').input_value()!=projects[1]['exercises'][0]['answer'];page.locator('[data-code-action="undo"]').tap();assert page.locator('#markup-editor').input_value()==projects[1]['exercises'][0]['answer'];assert page.locator('#offline-editor').input_value()==''
            page.locator('#offline-editor').fill(projects[1]['exercises'][1]['answer']);page.locator('#check-btn').tap();wait_for_check(page);assert '2/2 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#markup-editor').fill('<p>missing form</p>');page.locator('#check-btn').tap();wait_for_check(page);assert '0/2 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#back-to-home').tap();page.locator('#track-select').select_option('python');open_dropdown(page,'build-projects');page.locator('#project-list button').last.tap()
            own_route=projects[3]['exercises'][0]['answer'];page.locator('#offline-editor').fill(own_route);open_dropdown(page,'editor-tools')
            with page.expect_download() as route_download:page.locator('#export-project').tap()
            assert route_download.value.suggested_filename=='routes.py'
            from pathlib import Path
            import ast
            assert ast.dump(ast.parse(Path(route_download.value.path()).read_text()))==ast.dump(ast.parse(own_route))
            assert not cdn,cdn
            # Existing numeric project positions still open their original activity IDs.
            old=browser.new_context(**p.devices['iPhone 13']);old_page=old.new_page();old_page.goto(url)
            old_page.evaluate('localStorage.setItem("daily-coding-practice-v1", JSON.stringify({language:"javascript",positions:{"project-profile":1},drafts:{"project-profile-layout":"<main>My saved layout</main>"}}))');old_page.reload();open_dropdown(old_page,'build-projects');old_page.locator('#project-list button').first.tap()
            assert 'Make the layout' in old_page.locator('#activity-title').inner_text()
            assert old_page.locator('#offline-editor').input_value()=='<main>My saved layout</main>'
            assert old_page.locator('#previous-project-step').is_visible()
            old_page.locator('#previous-project-step').tap();assert old_page.locator('#activity-title').inner_text()=='Create a page document'
            old.close();context.close();browser.close()
            print('PASS: emulated iPhone touch editing, 320–844px layouts, recommendation/resume, verified-code and HTML carry-forward, old-position migration')
    finally:
        if thread.is_alive():server.shutdown()
        server.server_close()

if __name__=='__main__':test_phone()
