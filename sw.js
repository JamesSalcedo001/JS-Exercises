const CACHE_NAME = "js-daily-exercises-focus-v4";
const FILES_TO_CACHE = [
  "./", "./index.html", "./styles.css", "./index.js", "./editor.js", "./sections.js",
  "./practice-worker.js", "./practice-api.js", "./dom-runner.js", "./data/practical-skills.js", "./data/dom-practice.js", "./data/flight-practice.js", "./data/problem-solving.js",
  "./data/tier1-foundations.js", "./data/tier2-patterns.js", "./data/tier3-mini-challenges.js",
  "./data/tier4-chaining-composition.js", "./data/tier5-problem-solving.js",
  "./manifest.json", "./Code_Icon.png", "./copy.svg", "./home.svg", "./terminal.svg", "./unlock.svg", "./skip-forward.svg",
  "./vendor/skulpt/skulpt.min.js", "./vendor/skulpt/skulpt-stdlib.js", "./vendor/skulpt/LICENSE",
];
self.addEventListener("install", (event) => {
  // An incomplete download must not be advertised as offline-ready.
  // Fetch the new version instead of copying stale HTTP-cache responses into it.
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(
    FILES_TO_CACHE.map((file) => new Request(file, { cache: "reload" }))
  )).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys
    .filter((key) => key.startsWith("js-daily-exercises-") && key !== CACHE_NAME)
    .map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Optional Monaco stays online-only. The built-in editor needs no CDN resources.
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
    const saved = await cache.match(event.request);
    return saved || fetch(event.request);
  }));
});
self.addEventListener("message", (event) => {
  if (event.data?.type !== "CHECK_OFFLINE") return;
  event.waitUntil(caches.open(CACHE_NAME).then(async (cache) => {
    const files = await Promise.all(FILES_TO_CACHE.map((file) => cache.match(file)));
    event.ports[0]?.postMessage({ ready: files.every(Boolean) });
  }));
});
