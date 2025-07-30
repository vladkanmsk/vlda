const button = document.querySelector(".button")
const balanceBlock = document.querySelector(".balance")
let balance = 100
button.addEventListener("click", ()=>{
    console.log(button)
    const userStavka = prompt('Введите ставку')
    if (userStavka <= 0 || userStavka > balance) {
        alert("Ставка повинна бути більша за 0 та в межах балансу")
    }else if(isNaN(userStavka)){
        alert('Введіть число, а не текст')
    }else{
        balance = Math.round(balance - userStavka + userStavka*Math.random()*2)
        balanceBlock.textContent = balance
       // alert(`Баланс: ${balance}, ставка: ${userStavka}`)
    }   
})