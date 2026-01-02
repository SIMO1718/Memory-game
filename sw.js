self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-tasks').then((cache) => {
      return cache.addAll(['./', './HTML.html', './css.css', './js.js']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});