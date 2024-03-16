const VERSION = "v1"
const CACHE_NAME = `clock-app-${VERSION}`

const APP_STATIC_RESOURCES = [
    "/",
    "/index.html",
    "/css/style.css",
    "scripts/clock.js",
    "icons/android-chrome-512x512.png",
]

self.addEventListener("install", (e) => {
    e.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(APP_STATIC_RESOURCES);
      })(),
    );
  });
  