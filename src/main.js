import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

//FCM
//firebase.js
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from "firebase/messaging";
var firebaseConfig = {
    apiKey: "AIzaSyDiumFIZyF0P-unBSDdHXqiA09QLZqq_Ys",
    authDomain: "new-pwa-vue.firebaseapp.com",
    projectId: "new-pwa-vue",
    storageBucket: "new-pwa-vue.appspot.com",
    messagingSenderId: "1005798290493",
    appId: "1:1005798290493:web:7eb5a03b3e47839fa1e654"
}
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
getToken(messaging, { vapidKey: 'BCSqJ77hR7VzNglKUt9aGM1bHguFmdSMUCeZMdoDL8DSd3CmTE8NveYG88DrD7odkoZSuCnV1-CGotKH3jfHNso' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


// messaging.getToken({vapidKey: "BCSqJ77hR7VzNglKUt9aGM1bHguFmdSMUCeZMdoDL8DSd3CmTE8NveYG88DrD7odkoZSuCnV1-CGotKH3jfHNso"});
Vue.prototype.$messaging = messaging
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
