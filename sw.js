const CACHE_NAME = "missao-peru-v2"; // mude versão sempre que atualizar

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/logo-missao-peru.png",
  "/gratidao-pix.html",
  "/gratidao-mensal.html"
];

// Instalar e forçar ativação imediata
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ativar nova versão imediatamente
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia: sempre buscar online primeiro
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => caches.match(event.request))
  );
});
