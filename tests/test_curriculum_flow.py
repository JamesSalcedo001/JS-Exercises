"""One consistent route, concepts before tasks, transitions and saved project resumes."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice


def test_flow():
    routes=json.loads(subprocess.check_output(['node','--input-type=module','-e','import {sections} from "./sections.js"; import {learningRoute,topicBridge} from "./learning-flow.js"; console.log(JSON.stringify(Object.fromEntries(["javascript","python"].map(l=>[l,learningRoute(sections,l).map(s=>({id:s.id,bridge:topicBridge(s)}))]))));'],cwd=ROOT,text=True))
    assert all(item['bridge'] for route in routes.values() for item in route)
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context(**p.devices['iPhone 13']);page=context.new_page();errors=[]
            page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            for language,route in routes.items():
                page.locator('#track-select').select_option(language)
                assert page.locator('#level-select option').evaluate_all('all=>all.map(el=>el.value)')==[s['id'] for s in route]
                assert page.locator('#path-section-list button').count()==len(route)
                assert page.locator('#level-select option').first.text_content().startswith('Topic 1')
            page.locator('#track-select').select_option('javascript');page.locator('#recommended-start').tap()
            assert page.locator('#learn-step').get_attribute('open') is not None
            assert 'variable' in page.locator('#lesson').inner_text()
            assert 'named values' in page.locator('#topic-bridge').inner_text()
            page.locator('#offline-editor').fill('// a saved attempt');page.locator('#back-to-home').tap();page.locator('#recommended-start').tap()
            assert page.locator('#learn-step').get_attribute('open') is None
            page.locator('#exercise-select').select_option('3');assert page.locator('#topic-bridge').is_hidden()
            assert 'repeat small steps' in page.locator('#block-note').inner_text()
            page.locator('#back-to-home').tap()
            select_level(page,'project-profile');start_practice(page)
            assert 'Topic 7' in page.locator('#section-title').inner_text()
            assert page.locator('#project-guide').is_visible()
            page.locator('#offline-editor').fill('<!doctype html><!-- my saved page -->');page.locator('#back-to-home').tap()
            assert page.locator('#level-select').input_value()=='project-profile'
            select_level(page,'flight-js-basics');open_dropdown(page,'choose-step');page.locator('#resume-practice').tap()
            assert 'Create a page document'==page.locator('#activity-title').inner_text()
            assert '<!-- my saved page -->' in page.locator('#offline-editor').input_value()
            context.set_offline(True);cold=context.new_page();cold.goto(url)
            open_dropdown(cold,'learning-path');cold.locator('#path-section-list button').nth(6).tap()
            assert '<!-- my saved page -->' in cold.locator('#offline-editor').input_value()
            cold.set_viewport_size({'width':320,'height':568});assert cold.evaluate('document.documentElement.scrollWidth<=innerWidth')
            assert not errors,errors
            browser.close();print('PASS: JS/Python route consistency, topic transitions, learn-before-task, saved project resume, offline browsing and 320px fit')
    finally:
        server.shutdown();server.server_close();thread.join(timeout=2)


if __name__=='__main__':test_flow()
