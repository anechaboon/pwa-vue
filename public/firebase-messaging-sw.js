// // Import the functions you need from the SDKs you need

importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBImeH4Lw5aJ9tf7JU7MW44-GLpWN7Tvpo",
    authDomain: "vue-pwa-8656e.firebaseapp.com",
    projectId: "vue-pwa-8656e",
    storageBucket: "vue-pwa-8656e.appspot.com",
    messagingSenderId: "1006738536135",
    appId: "1:1006738536135:web:a6d10ccb17f743b80b30e2",
    measurementId: "G-J1TX8WMR89"
};

firebase.initializeApp(firebaseConfig);

let messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body,
        icon: 'alarm.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
