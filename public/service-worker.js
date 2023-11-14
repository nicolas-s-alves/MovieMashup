// public/service-worker.js
const CACHE_NAME = 'my-pwa-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        // Add other files and assets you want to cache
      ]);
    }),
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener('notificationclick', event => {
  if (event.action === 'install') {
    self.registration.prompt();
  }
});
