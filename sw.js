/* EKE-COUTURE : accès rapide et hors connexion (pages déjà visitées) */
const V = 'eke-v1';
const SHELL = ['./', 'manifest.webmanifest', 'img/icon-192.png', 'img/icon-512.png', 'img/grain.png', 'carte/recto.svg', 'carte/verso.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') {                         /* page : réseau d'abord (toujours à jour), cache si hors ligne */
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put('./', cp)); return res; })
      .catch(() => caches.match('./')));
    return;
  }
  /* images, carte, bibliothèques : cache d'abord, mis à jour en arrière-plan */
  e.respondWith(caches.match(r).then(hit => {
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
