const images = ['jn1','jn2','jn3','jn4']
const imgElem = this.$refs.displayImg

function random(array){
    let randomNo = Math.floor(Math.random() * array.length)
    return array[randomNo]
}
console.log('imgElem',imgElem)
setInterval(function(){
    let randomChoice = random(images)
    imgElem.src = `/public/images/${randomChoice}.jpeg` // 'images/'+randomChoice+'.jpeg'
}, 2000)

// export default randomImg