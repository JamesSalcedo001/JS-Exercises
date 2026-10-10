"""Check offline installation upgrades, failures, and unavailable browser storage."""
import functools
import os
from pathlib import Path
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
# The repository's previous service worker is intentionally the upgrade fixture.
OLD_WORKER = b'''const name = "js-daily-exercises-v2";
self.addEventListener("install", event => event.waitUntil(caches.open(name).then(cache => cache.addAll(["./", "./index.html"]))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(fetch(event.request).catch(() => caches.match(event.request))));'''

class SetupHandler(SimpleHTTPRequestHandler):
    mode = 'old'
    def log_message(self, *_):
        pass
    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            # A failed cache.addAll cancels its other downloads in this test.
            pass
    def do_GET(self):
        path = self.path.split('?')[0]
        if path == '/install-old.html':
            body = b'<script>navigator.serviceWorker.register("./sw.js")</script>Old installation'
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            self.wfile.write(body)
        elif path == '/sw.js' and self.mode == 'old':
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(OLD_WORKER)
        elif path == '/vendor/skulpt/skulpt.min.js' and self.mode == 'broken':
            self.send_error(404)
        else:
            super().do_GET()


def test_setup():
    server = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(SetupHandler, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    url = f'http://localhost:{server.server_port}/'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), args=['--no-sandbox'])
            context = browser.new_context()
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            page.goto(url + 'install-old.html')
            page.wait_for_function('navigator.serviceWorker.controller !== null')
            SetupHandler.mode = 'new'
            page.goto(url)
            try:
                page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            except Exception:
                print(page.locator('#offline-status').inner_text())
                print(page.evaluate('navigator.serviceWorker.getRegistration().then(r => ({active:r.active?.state, waiting:r.waiting?.state, installing:r.installing?.state}))'))
                raise
            keys = page.evaluate('caches.keys()')
            assert 'js-daily-exercises-v2' not in keys, keys
            context.set_offline(True)
            page.reload()
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            page.locator('#flight-section-list .section-card').nth(3).click()
            page.locator('#offline-editor').fill('print(8)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            print('PASS: old service-worker upgrade activates complete cache and runs Python offline')
            context.close()

            SetupHandler.mode = 'broken'
            context = browser.new_context()
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            page.goto(url)
            page.wait_for_function('document.querySelector("#offline-status").textContent.includes("failed")', timeout=35000)
            assert 'Offline ready' not in page.locator('#offline-status').inner_text()
            page.locator('#resume-flight').click()
            page.locator('#offline-editor').fill('console.log(18)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            print('PASS: incomplete precache reports failure while online JavaScript remains usable')
            context.close()

            SetupHandler.mode = 'new'
            context = browser.new_context(viewport={'width':320,'height':640})
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            context.add_init_script('Storage.prototype.setItem = function() { throw new Error("Storage disabled"); };')
            page = context.new_page()
            page.goto(url)
            page.locator('#resume-flight').click()
            assert 'may not be saved' in page.locator('#save-status').inner_text()
            page.locator('#offline-editor').fill('console.log(18)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
            # Next-block control works even when no progress can persist.
            for _ in range(3):
                page.locator('#next-btn').click()
            page.locator('#next-block-btn').click()
            assert 'JavaScript 2' in page.locator('#section-title').inner_text()
            print('PASS: disabled storage warning, functional output checks, next block, 320px layout')
            context.close()
            browser.close()
    finally:
        server.shutdown()
        server.server_close()

if __name__ == '__main__':
    test_setup()
