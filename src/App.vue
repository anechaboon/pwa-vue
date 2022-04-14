<template>
  <div id="app" class="small-container">
    <!-- <img v-for="image in jennie" :src="'./images/'+image.name+'.png'" :key="image.id" /> -->
    <div>{{ name }}</div>
    <br>
    <div>{{ newToken }}</div>
    <br>
    <img :src="img" alt="" style="width:50%;" ref="displayImg">

  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from 'axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
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
var token = "eJV2wHw5vogODW_qvFSEZh:APA91bHypgMOLYn21486s0fpeeOlm24YESFu7moGkOP479mz-rlpH9er_8Qh1RN7tKxapMa6fMQjusxNKAaj80OrdiZ56jb1QTUMgWIQ9SpVyJWdQ1pkHrglBV2v0cCQyJMPMHUIOjPx"
var newToken = ""
var name = ""
var imgLink = require('/public/images/jn1.jpeg')
export default {
  name: 'App',
  mounted(){
    // random image //
    let img = this.$refs.displayImg
    let jennie =  ['jn1','jn2','jn3','jn4']

    setInterval(function(){
      let randomNo = Math.floor(Math.random() * jennie.length)
      imgLink = require(`/public/images/${jennie[randomNo]}.jpeg`)
      img.src = imgLink // 'images/'+randomChoice+'.jpeg'
    }, 2000)
    // random image //

    // show token on screen
    getToken(messaging, { 
      vapidKey: 'BP9VjXtEBYHq0NlrdO-syWUR0jRiqbo2B6pJ01RPvfmx5RJmlV4Gv0UOKi49NdZx1juQ-36zUKkNK7URx_7Vxfc' 
    })
    .then((currentToken) => {
      if (currentToken) {
        this.newToken = currentToken
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
    // show token on screen

    // test call api by axios //
    axios.get('http://127.0.0.1:8000/api/v1/getUser')
    .then(function(res){
      console.log(res)
    })
    // test call api by axios //

    // subscribe websocket broadcast 
    // this function available to test on production when deploy project Laravel to server
    window.Echo.channel('EventTriggered')
    .listen('GetRequestEvent', (e) => {
      let index = e.index
      this.name = e.data[index].name
      console.log(e)
    })
    // subscribe websocket broadcast 
  },
  data () {
    return {
      img: imgLink,
      newToken: newToken,
      name: name
    }
  },
}
</script>

<style>
.small-container {
  max-width: 700px;
}
</style>
