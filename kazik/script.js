const button = document.querySelector(".button")
let balance = 100
button.addEventListener("click", ()=>{
    console.log(button)
    const userStavka = prompt('Введите ставку')
    balance = Math.round(balance - userStavka + userStavka*Math.random()*2)
    alert(`Баланс: ${balance}, ставка: ${userStavka}`)
})