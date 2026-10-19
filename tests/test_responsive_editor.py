"""Automatic desktop editor, phone keyboard conveniences and review contrast/layout."""
import functools
import os
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice


def test_layout():
    server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start();url=f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox'])
            desktop=browser.new_context();page=desktop.new_page();page.goto(url)
            page.wait_for_function('document.querySelector("#offline-editor").hidden')
            page.locator('#recommended-start').click()
            assert page.locator('#enable-monaco').count()==0
            assert page.locator('.run-actions #format-code').count()==0
            page.evaluate('monaco.editor.getEditors()[0].focus()');page.keyboard.type('(')
            assert page.evaluate('monaco.editor.getModels()[0].getValue()')=='()'
            page.keyboard.type(')');assert page.evaluate('monaco.editor.getModels()[0].getValue()')=='()'
            page.evaluate('monaco.editor.getModels()[0].setValue("const x={a:1};");monaco.editor.getEditors()[0].focus()')
            page.locator('#lesson-position').click()
            page.wait_for_function('monaco.editor.getModels()[0].getValue().includes("a: 1")')
            desktop.close()
            phone=browser.new_context(**p.devices['iPhone 13']);page=phone.new_page();page.goto(url)
            page.locator('#recommended-start').tap()
            assert page.locator('#offline-editor').is_visible()
            assert page.locator('#phone-code-tools').get_attribute('open') is None
            assert page.locator('[data-code-pair]').count()==0
            page.locator('#offline-editor').focus();page.locator('#offline-editor').press_sequentially('[')
            assert page.locator('#offline-editor').input_value()=='[]'
            page.locator('#offline-editor').press('Backspace');assert page.locator('#offline-editor').input_value()==''
            assert page.locator('#learn-step').evaluate('el=>getComputedStyle(el).backgroundColor')=='rgb(245, 247, 242)'
            assert page.locator('#learn-step').evaluate('el=>getComputedStyle(el).color')=='rgb(29, 48, 42)'
            page.locator('#learn-step').screenshot(path='/tmp/review-phone.png')
            page.locator('#back-to-home').tap();select_level(page,'practical-js-8');start_practice(page)
            open_dropdown(page,'experiment-details');open_dropdown(page,'planning-details');open_dropdown(page,'reflection-details')
            page.locator('#experiment-args').fill('[[123456789, -987654321, 123456789, 123456789]]')
            page.locator('#plan-input').fill('averylongidentifierwithoutanyspaces'*12)
            for width,height in [(320,568),(375,667),(390,844),(844,390)]:
                page.set_viewport_size({'width':width,'height':height})
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
                for selector in ['#experiment-args','#experiment-expected','#plan-input','#reflection-input']:
                    assert page.locator(selector).evaluate('el=>{const a=el.getBoundingClientRect(),b=el.parentElement.getBoundingClientRect();return a.left>=b.left && a.right<=b.right+1}'),selector
            page.locator('#offline-editor').fill('const x={a:1};');page.locator('#offline-editor').focus();page.locator('#lesson-position').tap()
            page.wait_for_function('document.querySelector("#offline-editor").value.includes("a: 1")')
            page.locator('#offline-editor').fill('function broken(');page.locator('#lesson-position').tap()
            assert page.locator('#offline-editor').input_value()=='function broken('
            phone.close();browser.close();print('PASS: default Monaco, typed pairs, automatic formatting, no redundant controls; light review, padded inputs, long values and 320–844px phone layouts')
    finally:
        server.shutdown();server.server_close();thread.join(timeout=2)


if __name__=='__main__':test_layout()
