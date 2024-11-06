const cards = document.querySelectoAll('cards')
// quesySelector - ищет
console.log(cards)
// forEach - для каждого что то делает
cards.forEach((card) => {
    card.addEventListener('click', ()=>{
        card.querySelecto('.card__front').classList.toggle("active__front");
        card.querySelecto('.card__back').classList.toggle("active__back");
    })
})