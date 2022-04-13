self.__precacheManifest = [].concat(self.__precacheManifest || [])
// eslint-disable-next-line no-undef
workbox.precaching.suppressWarnings()
// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// install new service worker when ok, then reload page.
self.addEventListener('message', msg => {
    // eslint-disable-next-line eqeqeq
    if (msg.data.action == 'skipWaiting') {
        self.skipWaiting()
    }
})
