const CACHE = 'shuangqi-english-v8';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png','./assets/scenes/melbourne-cafe.jpg','./assets/scenes/australian-supermarket.jpg','./assets/scenes/melbourne-bus.jpg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(Promise.all([
  self.clients.claim(),
  caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('shuangqi-english-') && key!==CACHE).map(key=>caches.delete(key))))
])));
self.addEventListener('fetch', e => {
  if(e.request.method!=='GET' || new URL(e.request.url).origin!==self.location.origin) return;
  e.respondWith(fetch(e.request).then(res=>{
    if(res.ok) caches.open(CACHE).then(c=>c.put(e.request,res.clone()));
    return res;
  }).catch(()=>caches.match(e.request).then(cached=>cached || caches.match('./index.html'))));
});
