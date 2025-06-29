const CACHE_NAME = "drishtee-cache-v2";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/images/icon/icon-192.png",
  "/images/icon/icon-512.png",
  "/images/icon/apple-touch-icon.png"
];

// Install: cache static files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for assets, network fallback for others
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET
  if (request.method !== "GET") return;

  // Cache-first strategy
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Dynamically cache assets like /assets/*.js, /assets/*.css
          if (
            request.url.includes("/assets/") ||
            STATIC_ASSETS.some((url) => request.url.includes(url))
          ) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response.clone());
              return response;
            });
          }
          return response;
        })
        .catch(() => caches.match("/index.html")); // fallback for SPA
    })
  );
});
