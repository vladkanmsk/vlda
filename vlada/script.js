const body = document.body; 
const html = document.documentElement;
const testBlock = document.querySelector(".test")
console.log(testBlock.offsetHeight)
const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);

const scrollBlock = document.querySelector(".progressBar");
document.addEventListener('scroll', () => {
    console.log(testBlock.offsetTop)
    console.log(window.innerHeight)
    if(testBlock.offsetTop < window.pageYOffset + window.innerHeight && window.pageYOffset < testBlock.offsetTop){
            console.log('видно')
            testBlock.classList.add('visible')
    }else{
        testBlock.classList.remove('visible')
    }
});
document.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight;
    let siteScroll = pageHeight - windowHeight;
    let blockWidth = window.pageYOffset / siteScroll;
    
    // ширина в процентах
    scrollBlock.style.width = `${blockWidth * 100}vw`;

    // цвет по шкале HSL от 0 (красный) до 120 (зелёный)
    const hue = blockWidth * 120;
    scrollBlock.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});
