import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { skipWaiting } from 'workbox-core'

declare let self: ServiceWorkerGlobalScope & { skipWaiting: typeof skipWaiting }
const manifest = self.__WB_MANIFEST

precacheAndRoute(manifest)

registerRoute(
    ({ request }) => request.destination === 'font',
    new CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    }),
)

addEventListener('install', () => {
    self.skipWaiting()
})
