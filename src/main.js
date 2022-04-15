import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Echo from 'laravel-echo'

//FCM
//firebase.js
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyBImeH4Lw5aJ9tf7JU7MW44-GLpWN7Tvpo",
  authDomain: "vue-pwa-8656e.firebaseapp.com",
  projectId: "vue-pwa-8656e",
  storageBucket: "vue-pwa-8656e.appspot.com",
  messagingSenderId: "1006738536135",
  appId: "1:1006738536135:web:a6d10ccb17f743b80b30e2",
  measurementId: "G-J1TX8WMR89"
}
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)


// messaging.getToken({vapidKey: "BCSqJ77hR7VzNglKUt9aGM1bHguFmdSMUCeZMdoDL8DSd3CmTE8NveYG88DrD7odkoZSuCnV1-CGotKH3jfHNso"});
Vue.prototype.$messaging = messaging
Vue.config.productionTip = false

// set for connect websockets to receive data
// this function available to test on production when deploy project Laravel to server
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'local',
  wsHost: '86238872-66-20190226102020.webstarterz.com',
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
