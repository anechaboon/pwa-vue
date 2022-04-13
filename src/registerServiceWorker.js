/* eslint-disable no-console */

import { register } from 'register-service-worker'
  
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  register(`firebase-messaging-sw.js`, {
    ready () {
      console.log(
        'firebase-messaging App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('firebase-messaging Service worker has been registered.')
    },
    cached () {
      console.log('firebase-messaging Content has been cached for offline use.')
    },
    offline () {
      console.log('firebase-messaging No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('firebase-messaging Error during service worker registration:', error)
    }
  })
