const CACHE='pdf-laser-classroom-v2-fix1';
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'];
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(['./','./index.html','./manifest.json']);for(const u of CDN){try{const r=await fetch(u,{mode:'no-cors'});await c.put(u,r)}catch(_){}}self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{e.respondWith((async()=>{const c=await caches.open(CACHE);const hit=await c.match(e.request,{ignoreSearch:true});if(hit)return hit;try{const r=await fetch(e.request);if(r.ok||r.type==='opaque')c.put(e.request,r.clone());return r}catch(_){return hit||Response.error()}})())});
