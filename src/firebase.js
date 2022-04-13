//firebase.js


import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

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

export { messaging }
