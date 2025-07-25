const CACHE_NAME = 'js-daily-exercises-v2';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './index.js',
  './sections.js',
  './data/tier1-foundations.js',
  './data/tier2-patterns.js',
  './data/tier3-challenges.js',
  './data/tier4-chaining.js',
  './data/tier5-solving.js',
  './manifest.json',
  './Code_Icon.png'
];


self.addEventListener('install', (event) => {
  console.log('Installing service worker and caching assets');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  )
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('🔄 Activating service worker');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
