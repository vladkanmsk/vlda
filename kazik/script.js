const button = document.querySelector(".button")
let balance = 100

button.addEventListener("click", () => {
  let userStavka;
  do {
    userStavka = prompt(`Введите ставку (от 1 до ${balance}):`);
    userStavka = Number(userStavka);
  } while (isNaN(userStavka) || userStavka <= 0 || userStavka > balance);
  balance = Math.round(balance - userStavka + userStavka * Math.random() * 2);
  alert(`Баланс: ${balance}, ставка: ${userStavka}`);
});
