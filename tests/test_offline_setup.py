"""Check offline installation upgrades, failures, and unavailable browser storage."""
import functools
import os
from pathlib import Path
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from playwright.sync_api import sync_playwright
from test_flight import open_dropdown, select_level, start_practice

ROOT = Path(__file__).resolve().parents[1]

def open_flight(page):
    open_dropdown(page, "flight-plan")

# The repository's previous service worker is intentionally the upgrade fixture.
OLD_WORKER = b'''const name = "js-daily-exercises-v2";
self.addEventListener("install", event => event.waitUntil(caches.open(name).then(cache => cache.addAll(["./", "./index.html"]))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(fetch(event.request).catch(() => caches.match(event.request))));'''
OLD_CACHED_WORKER = b'''const name = "js-daily-exercises-flight-v1";
self.addEventListener("install", event => event.waitUntil(caches.open(name).then(cache => cache.addAll(["./", "./index.html"]))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.open(name).then(async cache => (await cache.match(event.request)) || fetch(event.request))));'''
OLD_PAGE = b'<script>window.controlChanged=false; navigator.serviceWorker.addEventListener("controllerchange",()=>{window.controlChanged=true}); navigator.serviceWorker.register("./sw.js").then(r => { if(r.active) r.update(); });</script>Previous cached layout'

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
        elif path in ['/', '/index.html'] and self.mode == 'old-cached':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.send_header('Cache-Control', 'max-age=3600')
            self.end_headers()
            self.wfile.write(OLD_PAGE)
        elif path == '/sw.js' and self.mode in ['old', 'old-cached']:
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(OLD_CACHED_WORKER if self.mode == 'old-cached' else OLD_WORKER)
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
            open_flight(page)
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
            open_flight(page)
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            page.locator('#flight-section-list .section-card').nth(3).click()
            page.locator('#offline-editor').fill('print(8)')
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            print('PASS: old service-worker upgrade activates complete cache and runs Python offline')
            context.close()

            # A cache-first prior app shows its old page once, saves the update,
            # then serves the new layout on the next reload without losing storage.
            SetupHandler.mode = 'old-cached'
            context = browser.new_context()
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            page.goto(url)
            page.wait_for_function('navigator.serviceWorker.controller !== null')
            page.evaluate('localStorage.setItem("daily-coding-practice-v1", JSON.stringify({drafts:{"js-budget":"console.log(18)"},completed:{"js-budget":true},positions:{},lastFlight:"js-budget"}))')
            SetupHandler.mode = 'new'
            page.reload()
            page.wait_for_function('caches.keys().then(keys => keys.includes("js-daily-exercises-incremental-v10") && !keys.includes("js-daily-exercises-flight-v1"))')
            page.wait_for_function('window.controlChanged || document.querySelector("#offline-status")')
            page.reload()
            page.wait_for_function('document.querySelector("#offline-status").textContent.startsWith("Offline ready")')
            assert page.locator('#level-select option').count() == 17
            start_practice(page)
            assert page.locator('#offline-editor').input_value() == 'console.log(18)'
            page.locator('#check-btn').click()
            page.wait_for_function('document.querySelector("#check-result").textContent.includes("Output matches")')
            print('PASS: prior cache-first layout upgrades on reload; existing drafts and progress migrate')
            context.close()

            SetupHandler.mode = 'broken'
            context = browser.new_context()
            context.route('https://cdn.jsdelivr.net/**', lambda route: route.abort())
            page = context.new_page()
            page.goto(url)
            open_flight(page)
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
            open_flight(page)
            page.locator('#resume-flight').click()
            assert page.locator('#save-warning').is_visible()
            assert 'may not be saved' in page.locator('#save-warning').inner_text()
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
