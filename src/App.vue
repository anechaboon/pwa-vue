<template>
  <div id="app" class="small-container">
    <!-- <img v-for="image in jennie" :src="'./images/'+image.name+'.png'" :key="image.id" /> -->
    <img :src="img" alt="" style="width:100%;" ref="displayImg">
  </div>
</template>

<script>
// import randomImg from '@/random-img'
var imgLink = require('/public/images/jn1.jpeg')
export default {
  name: 'App',
  mounted(){
    let img = this.$refs.displayImg
    let jennie =  ['jn1','jn2','jn3','jn4']

    setInterval(function(){
      let randomNo = Math.floor(Math.random() * jennie.length)
      imgLink = require(`/public/images/${jennie[randomNo]}.jpeg`)
      img.src = imgLink // 'images/'+randomChoice+'.jpeg'
    }, 2000)

    console.log('Firebase cloud messaging object', this.$messaging)

  },
  data () {
    return {
      img: imgLink,
    }
  },
}
</script>

<style>
.small-container {
  max-width: 700px;
}
</style>
