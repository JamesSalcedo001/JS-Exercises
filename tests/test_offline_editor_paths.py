"""Offline Monaco, genuine JS/HTML/Python formatting, clear contracts and focused paths."""
import functools
import os
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice


def test_editor_paths():
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            context=browser.new_context();context.add_init_script("if(!localStorage.getItem('test-desktop-auto')) localStorage.setItem('daily-practice-editor','plain')");page=context.new_page();errors=[];remote=[]
            page.on('pageerror',lambda error:errors.append(str(error)))
            page.on('request',lambda req:remote.append(req.url) if req.url.startswith(('http:','https:')) and not req.url.startswith(url) else None)
            page.goto(url);page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")',timeout=60000)
            page.locator('#study-path').select_option('basics');assert page.locator('#level-select option').count()==3
            page.locator('#recommended-start').click()
            assert 'complete program' in page.locator('#task-contract').inner_text()
            assert 'const budget = 30' in page.locator('#task-setup').inner_text()
            page.locator('#task-use-start').click();assert 'const budget = 30' in page.locator('#offline-editor').input_value()
            assert page.locator('#task-use-start').is_disabled()
            page.locator('#exercise-select').select_option('1');assert 'const passenger = "Sam"' in page.locator('#task-setup').inner_text()
            page.locator('#back-to-home').click();page.locator('#study-path').select_option('tools')
            assert page.locator('#level-select option').count()==3
            page.locator('#recommended-start').click()
            assert 'practice_even' in page.locator('#task-contract').inner_text()
            assert 'checker supplies' in page.locator('#task-contract').inner_text()
            assert 'practice_even([1,2,3,4])' in page.locator('#task-call').inner_text()
            assert 'filter' in page.locator('#review-example').text_content()
            open_dropdown(page,'planning-details');assert 'practice_even' in page.locator('#planning-example').inner_text()
            open_dropdown(page,'reflection-details');assert 'practice_even' in page.locator('#reflection-example').inner_text()
            page.locator('#offline-editor').fill('function practice_even(numbers){return numbers.filter(n=>n%2===0)}')
            open_dropdown(page,'editor-tools');page.locator('#format-code').click();page.wait_for_function('document.querySelector("#format-message").textContent.startsWith("Formatted")')
            assert '\n' in page.locator('#offline-editor').input_value()
            # All remaining checks happen with the browser disconnected.
            context.set_offline(True)
            page.evaluate("localStorage.removeItem('daily-practice-editor')");page.evaluate("localStorage.setItem('test-desktop-auto','1')");page.reload()
            page.wait_for_function('document.querySelector("#offline-editor").hidden',timeout=30000)
            assert 'Monaco editor' in page.locator('#editor-status').text_content()
            page.locator('#recommended-start').click()
            page.evaluate('monaco.editor.getModels()[0].setValue("const x={a:1};")')
            open_dropdown(page,'editor-tools');page.locator('#format-code').click();page.wait_for_function('document.querySelector("#format-message").textContent.startsWith("Formatted")')
            assert 'a: 1' in page.evaluate('monaco.editor.getModels()[0].getValue()')
            page.evaluate('monaco.editor.getModels()[0].setValue("const values=[1,2];")')
            page.evaluate('monaco.editor.getEditors()[0].getAction("editor.action.formatDocument").run()')
            assert '[1, 2]' in page.evaluate('monaco.editor.getModels()[0].getValue()')
            cold=context.new_page();cold.on('pageerror',lambda error:errors.append(str(error)));cold.goto(url)
            cold.wait_for_function('document.querySelector("#offline-editor").hidden')
            assert cold.locator('#study-path').input_value()=='tools'
            cold.locator('#track-select').select_option('python');cold.locator('#study-path').select_option('tools');cold.locator('#recommended-start').click()
            cold.evaluate('monaco.editor.getModels()[0].setValue("x={\'a\':1}")')
            open_dropdown(cold,'editor-tools');cold.locator('#format-code').click();cold.wait_for_function('document.querySelector("#format-message").textContent.startsWith("Formatted")')
            assert 'x = {"a": 1}' in cold.evaluate('monaco.editor.getModels()[0].getValue()')
            cold.evaluate('monaco.editor.getModels()[0].setValue("def broken(:")')
            open_dropdown(cold,'editor-tools');cold.locator('#format-code').click();cold.wait_for_function('document.querySelector("#format-message").textContent.startsWith("Could not format")')
            assert cold.evaluate('monaco.editor.getModels()[0].getValue()')=='def broken(:'
            cold.locator('#back-to-home').click();cold.locator('#track-select').select_option('javascript');cold.locator('#study-path').select_option('pages')
            select_level(cold,'project-profile');start_practice(cold)
            cold.evaluate('monaco.editor.getModels()[0].setValue("<style>p{color:red}</style><main><p>Hello</p><p>World</p></main>")')
            open_dropdown(cold,'editor-tools');cold.locator('#format-code').click();cold.wait_for_function('document.querySelector("#format-message").textContent.startsWith("Formatted")')
            assert 'color: red' in cold.evaluate('monaco.editor.getModels()[0].getValue()')
            assert not errors,errors
            assert not remote,remote
            browser.close();print('PASS: focused paths, complete task contracts, supplied values, review examples, tailored writing; JS/HTML/Python formatting and Monaco in a cold offline tab, no CDN')
    finally:
        server.shutdown();server.server_close();thread.join(timeout=2)


if __name__=='__main__':test_editor_paths()
