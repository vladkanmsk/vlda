const blocks = document.querySelectorAll('.block')


window.addEventListener('mousemove',(info)=>{
    // console.log(info.offsetX, info.offsetY)
    blocks.forEach((block)=>{
    let distW = block.offsetLeft - info.clientX + 10
    let distH = block.offsetTop - info.clientY + 10
    let dist = Math.sqrt(distH*distH + distW*distW)
    if (dist < 100) {
        block.style.opacity = 1-dist/150
    }else{
        block.style.opacity = 0
    }
    })

})