"""Check the full curriculum, function judging, independent practice, and offline DSA."""
import functools
import json
import os
import subprocess
import threading
from http.server import ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import ROOT, QuietHandler, open_dropdown, select_level, start_practice


def wait_for_check(page):
    page.wait_for_function('document.querySelector("#check-result").textContent.length > 0')


def test_path():
    blocks = json.loads(subprocess.check_output(
        ['node', '--input-type=module', '-e', 'import {problemSections} from "./data/problem-solving.js"; console.log(JSON.stringify(problemSections))'], cwd=ROOT, text=True))
    server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(ROOT)))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    url = f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), args=['--no-sandbox'])
            context = browser.new_context()
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(url)
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            # Home is a focused picker, not a wall of exercise cards.
            for identifier in ['learning-path', 'practice-method', 'flight-plan', 'legacy-library', 'device-menu']:
                assert page.locator('#' + identifier).get_attribute('open') is None
            assert not page.locator('#use-starter').is_checked()
            total_cases = 0
            for language in ['javascript', 'python']:
                page.locator('#track-select').select_option(language)
                assert page.locator('#level-select option').count() == (14 if language == "javascript" else 13)
                prefix = "js" if language == "javascript" else "py"
                expected_route = [f"flight-{prefix}-basics", f"flight-{prefix}-loops", f"flight-{prefix}-project"] + [f"practical-{prefix}-{n}" for n in range(8, 13)] + (["practical-js-13"] if prefix == "js" else []) + [f"algorithm-{prefix}-basics"] + [f"path-{prefix}-{n}" for n in range(4, 8)]
                assert page.locator('#level-select option').evaluate_all('options => options.map(o => o.value)') == expected_route
                for block in [b for b in blocks if b['language'] == language]:
                    select_level(page,block['id'])
                    start_practice(page)
                    for i, exercise in enumerate(block['exercises']):
                        assert page.locator('#offline-editor').input_value() == ''
                        assert page.locator('#concept-details').get_attribute('open') is None
                        assert page.locator('#solution-details').get_attribute('open') is None
                        assert page.locator('#answer-box').is_hidden()
                        assert page.locator('#function-signature').inner_text() == exercise['signature']
                        page.locator('#offline-editor').fill(exercise['answer'])
                        page.locator('#check-btn').click()
                        wait_for_check(page)
                        assert f"{len(exercise['tests'])}/{len(exercise['tests'])} tests passed" in page.locator('#check-result').inner_text(), (exercise['id'], page.locator('#output').inner_text(), page.locator('#case-list').inner_text())
                        assert page.locator('#case-list .case-pass').count() == len(exercise['tests'])
                        assert 'Solved without help' in page.locator('#exercise-progress').inner_text()
                        total_cases += len(exercise['tests'])
                        if i < len(block['exercises']) - 1:
                            page.locator('#next-btn').click()
                    page.locator('#back-to-home').click()
            assert total_cases == 144
            print('PASS: all 24 additional challenges, 144 function cases, expanded level picker, blank defaults and collapsed help')

            # Printed answers do not substitute for returning a general result.
            page.locator('#track-select').select_option('javascript')
            select_level(page,'path-js-4')
            start_practice(page)
            page.locator('#exercise-select').select_option('0')
            page.locator('#offline-editor').fill('function findMax(numbers) { console.log(5); }')
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '0/6 tests passed' in page.locator('#check-result').inner_text()
            assert page.locator('#case-results').get_attribute('open') is not None
            page.locator('#offline-editor').fill('function findMax(numbers) { return NaN; }')
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '0/6 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#offline-editor').fill('function findMax(numbers) { numbers.reverse(); return numbers.length ? Math.max(...numbers) : null; }')
            page.locator('#check-btn').click(); wait_for_check(page)
            assert 'Input changed' in page.locator('#case-list').inner_text()
            open_dropdown(page, 'planning-details')
            page.locator('#plan-input').fill('Empty -> null. Otherwise track the largest actual value.')
            open_dropdown(page, 'hints-details')
            page.locator('#hint-btn').click()
            source = blocks[0]['exercises'][0]['answer']
            page.locator('#offline-editor').fill(source)
            page.locator('#check-btn').click(); wait_for_check(page)
            assert 'Checked with help' in page.locator('#exercise-progress').inner_text()
            open_dropdown(page, 'reflection-details')
            page.locator('#reflection-input').fill('One scan, O(n) time. Best starts from the input, not zero.')
            page.locator('#retry-blank').click()
            assert page.locator('#offline-editor').input_value() == ''
            assert page.locator('#hints li').count() == 0
            assert page.locator('#hint-btn').is_enabled()
            open_dropdown(page, 'editor-tools')
            page.locator('#restore-draft').click()
            assert page.locator('#offline-editor').input_value() == source
            page.locator('#back-to-home').click()
            page.reload()
            start_practice(page)
            assert page.locator('#offline-editor').input_value() == source
            assert page.locator('#plan-input').input_value().startswith('Empty -> null')
            assert 'O(n)' in page.locator('#reflection-input').input_value()
            print('PASS: returned values required, NaN rejected, input mutation detected, hints tracked, drafts/plans/reflections restored')

            # Path mode continues within the chosen language, not the flight schedule.
            page.locator('#back-to-home').click()
            select_level(page,'flight-js-project')
            start_practice(page)
            page.locator('#exercise-select').select_option('3')
            page.locator('#next-block-btn').click()
            assert 'Useful methods' in page.locator('#section-title').inner_text()
            page.locator('#back-to-home').click()
            open_dropdown(page, 'learning-resources')
            page.locator('#use-starter').check()
            select_level(page,'flight-js-basics')
            start_practice(page)
            assert 'const budget = 30' in page.locator('#offline-editor').input_value()
            page.locator('#back-to-home').click()
            page.locator('#track-select').select_option('python')
            select_level(page,'path-py-6')
            start_practice(page)
            page.locator('#exercise-select').select_option('0')
            page.locator('#offline-editor').fill('def is_palindrome(text):\n    return 0')
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '0/6 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#back-to-home').click()
            print('PASS: per-language progression, opt-in starters, strict boolean/number judging')

            # Saved online work remains usable after server shutdown and a cold offline tab.
            select_level(page,'path-py-7')
            start_practice(page)
            server.shutdown()
            context.set_offline(True)
            page.close()
            page = context.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(url)
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            start_practice(page)
            page.locator('#exercise-select').select_option('2')
            # Last activity was previously solved. Run the saved sliding-window function.
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '7/7 tests passed' in page.locator('#check-result').inner_text()
            page.locator('#back-to-home').click()
            page.locator('#track-select').select_option('javascript')
            select_level(page,'path-js-7')
            start_practice(page)
            page.locator('#exercise-select').select_option('0')
            page.locator('#check-btn').click(); wait_for_check(page)
            assert '7/7 tests passed' in page.locator('#check-result').inner_text()
            page.set_viewport_size({'width':320,'height':640})
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
            assert not errors, errors
            print('PASS: new JS/Python DSA functions run from saved work in a fresh offline tab; 320px layout fits')
            context.close()
            browser.close()
    finally:
        if thread.is_alive():
            server.shutdown()
        server.server_close()

if __name__ == '__main__':
    test_path()
