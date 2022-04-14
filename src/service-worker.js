self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    if (msg.data.action=='skipWaiting'){
        self.skipWaiting()
    }
})

var cacheName = 'new-2-video-storage';
var filesToCache = [
    '/images/jn1.jpeg',
    '/images/jn2.jpeg',
    '/images/jn3.jpeg',
    '/images/jn4.jpeg',
];
// add cache
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
        })
    );
});
// // check version 
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
    caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
        }
        }));
    })
    );
    return self.clients.claim();
});

// // call cache
// self.addEventListener('fetch', function(e) {
//     console.log('[ServiceWorker] Fetch', e.request.url);
//     e.respondWith(
//         caches.match(e.request).then(function(response) {
//             return response || fetch(e.request);
//         })
//     );
// });


//Web Push Notifications//
let click_open_url
self.addEventListener('push', function(event) {
    let push_message = event.data.json()
    // push notification can send event.data.json() as well
    click_open_url = push_message.notification.data.url
    const options = {
        body: push_message.notification.body,
        icon: push_message.notification.icon,
        image: push_message.notification.image,
        tag: 'alert'
    };
    event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
});

self.addEventListener('notificationclick', function(event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    if ( click_open_url ){
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
});
