"""Functional browser checks. Requires Python Playwright and Chromium.
Run: python3 tests/test_flight.py (no application packages required).
"""
import functools
import json
import os
from pathlib import Path
import subprocess
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]

def open_dropdown(page, identifier):
    ancestors = page.locator('#' + identifier).evaluate("el => { const ids=[]; for (let p=el.parentElement;p;p=p.parentElement) if(p.tagName==='DETAILS' && p.id) ids.unshift(p.id); return ids; }")
    for ancestor in ancestors:
        if page.locator('#' + ancestor).get_attribute('open') is None:
            page.locator('#' + ancestor + ' > summary').click()
    if page.locator('#' + identifier).get_attribute('open') is None:
        page.locator('#' + identifier + ' > summary').click()


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def test_app():
    data = subprocess.check_output(
        ['node', '--input-type=module', '-e',
         'import {flightSections} from "./data/flight-practice.js"; console.log(JSON.stringify(flightSections))'],
        cwd=ROOT, text=True,
    )
    blocks = json.loads(data)
    assert len(blocks) == 6
    assert sum(e['minutes'] for b in blocks for e in b['exercises']) == 220
    ids = [e['id'] for b in blocks for e in b['exercises']]
    assert len(set(ids)) == 24
    for language in ['javascript', 'python']:
        assert sum(b['minutes'] for b in blocks if b['language'] == language) == 110
    server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(ROOT)))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    url = f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), args=['--no-sandbox'])
            context = browser.new_context()
            # Core practice must work even if the optional online editor is unavailable.
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(url)
            open_dropdown(page, 'flight-plan')
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            page.wait_for_function('navigator.serviceWorker.controller !== null')
            assert page.locator('#section-list .section-card').count() == 5
            assert page.locator('#flight-section-list .section-card').count() == 6
            for index, block in enumerate(blocks):
                page.locator('#flight-section-list .section-card').nth(index).click()
                for offset, exercise in enumerate(block['exercises']):
                    page.locator('#offline-editor').fill(exercise['answer'])
                    page.locator('#check-btn').click()
                    page.wait_for_function('document.querySelector("#check-result").textContent.length > 0')
                    assert 'Output matches' in page.locator('#check-result').inner_text(), (exercise['id'], page.locator('#output').inner_text())
                    assert page.locator('#output').inner_text().rstrip() == exercise['expected']
                    if offset < len(block['exercises']) - 1:
                        page.locator('#next-btn').click()
                assert page.locator('#next-btn').is_disabled()
                page.locator('#back-to-home').click()
            assert '24 of 24' in page.locator('#flight-progress').inner_text()
            print('PASS: all 24 JS/Python reference solutions and output checks')

            # Failed output checks, hints, syntax errors, draft restoration, timeout and Stop.
            page.locator('#flight-section-list .section-card').first.click()
            for _ in range(3):
                page.locator('#previous-btn').click()
            open_dropdown(page, 'hints-details')
            page.locator('#hint-btn').click()
            open_dropdown(page, 'hints-details')
            page.locator('#hint-btn').click()
            assert page.locator('#hints li').count() == 2
            assert page.locator('#hint-btn').is_disabled()
            page.locator('#offline-editor').fill('console.log(999)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Not a match")')
            page.locator('#next-btn').click()
            page.locator('#previous-btn').click()
            assert page.locator('#offline-editor').input_value() == 'console.log(999)'
            page.locator('#offline-editor').fill('while (true) {}')
            page.locator('#run-btn').click()
            page.wait_for_function('document.querySelector("#output").textContent.includes("Stopped after 5 seconds")', timeout=10000)
            page.locator('#run-btn').click()
            page.locator('#stop-btn').click()
            assert 'Stopped.' in page.locator('#output').inner_text()
            page.locator('#offline-editor').fill('console.log(18)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            page.locator('#back-to-home').click()

            page.locator('#flight-section-list .section-card').nth(3).click()
            for _ in range(3):
                page.locator('#previous-btn').click()
            page.locator('#offline-editor').fill('if x = 1:\n    print(x)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Not a match")')
            assert 'Error:' in page.locator('#output').inner_text()
            page.locator('#offline-editor').fill('while True:\n    pass')
            page.locator('#run-btn').click()
            page.wait_for_function('document.querySelector("#output").textContent.includes("Error:")', timeout=10000)
            page.locator('#offline-editor').fill(blocks[3]['exercises'][0]['answer'])
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            page.locator('#back-to-home').click()
            print('PASS: failed checks, hints, JS/Python errors, loop limits, Stop, and draft navigation')

            # The original library still executes in the page context, including DOM work.
            open_dropdown(page, 'legacy-library')
            page.locator('#section-list .section-card').first.click()
            assert '1 to 10' in page.locator('#question-text').inner_text()
            assert page.locator('#check-btn').is_hidden()
            page.locator('#offline-editor').fill('for(let i=1;i<=10;i++) console.log(i); document.getElementById("dom-output").textContent="DOM works";')
            page.locator('#run-btn').click()
            assert page.locator('#output').inner_text().strip() == '\n'.join(map(str, range(1, 11)))
            assert page.locator('#dom-output').inner_text() == 'DOM works'
            open_dropdown(page, 'solution-details')
            page.locator('#answer-btn').click()
            assert 'for' in page.locator('#answer-box').inner_text()
            page.locator('#next-btn').click()
            assert 'even' in page.locator('#question-text').inner_text()
            page.locator('#back-to-home').click()
            print('PASS: original exercise execution, DOM output, answers, and next navigation')

            # No server and no network; a fresh tab cannot reuse an in-memory editor/runtime.
            server.shutdown()
            context.set_offline(True)
            page.close()
            page = context.new_page()
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(url)
            open_dropdown(page, 'flight-plan')
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            assert '24 of 24' in page.locator('#flight-progress').inner_text()
            page.locator('#resume-flight').click()
            assert 'Python 1' in page.locator('#section-title').inner_text()
            assert page.locator('#offline-editor').input_value() == blocks[3]['exercises'][0]['answer']
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            assert page.locator('#output').inner_text().strip() == '8'
            page.locator('#back-to-home').click()
            page.locator('#flight-section-list .section-card').first.click()
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            assert page.locator('#output').inner_text().strip() == '18'
            page.reload()
            open_dropdown(page, 'flight-plan')
            page.locator('#resume-flight').click()
            assert page.locator('#offline-editor').input_value() == 'console.log(18)'
            assert not errors, errors
            print('PASS: server stopped + network offline + new tab/reload; JS/Python run; drafts and progress resume')
            context.close()
            browser.close()
    finally:
        if thread.is_alive():
            server.shutdown()
        server.server_close()

if __name__ == '__main__':
    test_app()
