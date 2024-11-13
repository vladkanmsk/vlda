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
    for (let j = 0; j < words.length; j++) {
        for (let i = 0; i < 2; i++) {
            const newCard = document.createElement('div')
            newCard.classList.add("card")
            gameboard.appendChild(newCard);
            
            const newCardFront = document.createElement('div')
            newCard.appendChild(newCardFront)
            newCardFront.classList.add("card__front")
            
            
            const newCardBack = document.createElement('div')
            newCard.appendChild(newCardBack)
            newCardBack.classList.add("card__back")
            newCardBack.textContent = words[j]
            
            
            newCard.addEventListener('click', ()=>{
                newCard.querySelector('.card__front').classList.toggle("active__front");
                newCard.querySelector('.card__back').classList.toggle("active__back");
            })}}
        const cards = [...gameboard.querySelectorAll(".card")]
        cards.sort(() => Math.random()- 0.5 )
    .map(card => gameboard.appendChild (card))
        }

geterateCards(amount, wordsForCard)


