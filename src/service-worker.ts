import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { skipWaiting } from 'workbox-core'

declare let self: ServiceWorkerGlobalScope & { skipWaiting: typeof skipWaiting }
const manifest = self.__WB_MANIFEST

precacheAndRoute(manifest)

registerRoute(
    ({ url, request }) => {
        return /\/no-sw-precache\//.test(url.pathname) || ['image', 'font'].includes(request.destination)
    },
    new CacheFirst({
        cacheName: 'non-critical',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 14 * 24 * 60 * 60,
            }),
        ],
    }),
)

addEventListener('install', () => {
    self.skipWaiting()
})
