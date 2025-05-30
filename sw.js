const CACHE_NAME = 'js-daily-exercises-v2';


self.addEventListener('install', (event) => {
  console.log('Installing service worker');
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
