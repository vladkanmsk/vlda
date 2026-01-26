const switchBlock = document.querySelector(".switch")
const switchEye = document.querySelector(".eye")
const switchBlack = document.querySelector(".cherniy")
const switchBlick = document.querySelector(".blick")
const switchVeko = document.querySelector(".veko")

switchBlock.addEventListener('click', ()=>{
    switchBlock.classList.toggle('closedswitch')
    switchEye.classList.toggle('closedeye')
    switchBlack.classList.toggle('closedblack')
    switchBlick.classList.toggle('closedblick')
    switchVeko.classList.toggle('closedveko')
})