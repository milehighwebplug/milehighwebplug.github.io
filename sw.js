// Mile High Web Plug service worker.
// Bump VERSION on every deploy that changes HTML, or returning visitors can see a stale page offline.
const VERSION = 'mhwp-2026-11-13a';
const PRECACHE = [
  '/', '/demo', '/manifest.webmanifest',
  '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png', '/pwa.js', '/demo.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Same-origin GETs only. Google Fonts, /api/*, and form posts go straight to the network.
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/api/')) return;

  if (req.mode === 'navigate') {
    // Network first so a fresh deploy shows up immediately; cache is the offline fallback.
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(async () => {
        // Workers serves /demo.html as /demo, so try both spellings before falling back to home.
        const clean = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
        return (await caches.match(req, { ignoreSearch: true })) ||
               (await caches.match(clean)) || caches.match('/');
      })
    );
    return;
  }
  // Static assets: cache first.
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
