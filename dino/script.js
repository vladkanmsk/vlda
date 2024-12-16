const dino = document.querySelector('.dino');
const cactus = document.querySelector('.kaktus')
const korobka = document.querySelector('.korobka')
let isJumping = false;
document.addEventListener("keydown", (e) => {
    console.log(e.code)
    jump(e.code)
})
setTimeout(() => {
    cactusMove()
}, 3000);


function jump(key){
    if(key == "Space" && !isJumping){
         isJumping = true;
console.log('jump')
dino.style.bottom = "200px"
setTimeout(()=>{
    dino.style.bottom = "50px"
}, 400)
setTimeout(()=>{
    isJumping = false
}, 800)
    }
}   

function cactusMove(){
 let newcactus = cactus.cloneNode(true);
 korobka.appendChild(newcactus);

 setTimeout(() => {
     newcactus.style.right = "800px"
 }, 10);

 
 setTimeout(() => {
    newcactus.remove()
}, 1200);
setTimeout(() => {
    cactusMove()
}, 1200);
}
