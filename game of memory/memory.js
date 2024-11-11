const cards = document.querySelectorAll('.card');
const gameboard = document.querySelector('.gameboard');
// querySelectorAll - ищет
console.log(cards);
// forEach - что то для каждого
cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        card.querySelector('.card__front').classList.toggle("active__front");
        card.querySelector('.card__back').classList.toggle("active__back");
    });
});
console.log("b" + "a" + + "a")

let amount = 8 
const wordsForCard = ["A", "B", "C", "D"]

function geterateCards(amount, words ){
const newCard = document.createElement('div')
newCard.classList.add("card")
gameboard.appendChild(newCard);

const newCardFront = document.createElement('div')
newCard.appendChild(newCardFront)
newCardFront.classList.add("card__front")


const newCardBack = document.createElement('div')
newCard.appendChild(newCardBack)
newCardBack.classList.add("card__back")
newCardBack.textContent = words[0]


newCard.addEventListener('click', ()=>{
    newCard.querySelector('.card__front').classList.toggle("active__front");
    newCard.querySelector('.card__back').classList.toggle("active__back");
})}
geterateCards(amount, wordsForCard)