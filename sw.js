const CACHE = 'shuangqi-english-v2';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c=>c.put(e.request, copy));
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
