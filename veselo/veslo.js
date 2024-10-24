let misstakes = 0



const stick = document.querySelectorAll(".stick")
console.log(stick)
console.log(misstakes)


const alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"]
const alphabetBox = document.querySelector('.alphabet_box');
for (let i = 0; i< alphabet.length; i++) {
    const bukva = alphabet[i];
    //     console.log(bukva)
    //     const div = document.createElement ("div");
    // alphabetBox.appendChild(div);
    // div.classList.add('alphabetLetter')
    // div.textContent  = alphabet[i];
    creatingBlock(alphabetBox, alphabet,"alphabetLetter","s", i ) 

    //div.addEventListener('click', () =>{
//    console.log(div)
//})
}

const wordBox = document.querySelector('.word')
const wordArray = ["ГУСЬ", "БОБР", "НАЙКПРО", "КУРВА", "ЩОВЕЛЬ"];
let randomindex = Math.floor( Math.random()*5)
let WORD = wordArray [randomindex];
for (let i = 0; i < WORD.length; i++) {
    //const div = document.createElement ("div");
    //wordBox.appendChild(div);
    //div.classList.add('let')
    //div.textContent  = WORD[i];
    creatingBlock(wordBox, WORD, "let", "none", i)
}
function creatingBlock(parentBlock, slovo, newClass, secondClass, i){
    const div = document.createElement ("div");
    parentBlock.appendChild(div);
    div.classList.add(newClass)
    div.classList.add(secondClass)
    div.textContent  = slovo[i];
}

const wordLetters = document.querySelectorAll(".let")

const alpabetButtons = document.querySelectorAll(".alphabetLetter")
alpabetButtons.forEach((button) => {
button.addEventListener("click", ()=>{
    console.log(button.textContent)
    console.log(WORD.indexOf(button.textContent))
    if (WORD.indexOf (button.textContent) == -1){
        console.log("pomilka!")
    stick[misstakes].classList.remove('stick')
    misstakes++
    console.log(misstakes)
}else{
      
            FLIW(WORD, button.textContent)
    }
        
 });
});
//find letters in word
function FLIW(array, letterToFind){
    console.log(44)
for (let i = 0; i < array.length; i++) {
if (array[i] == letterToFind){
wordLetters[i].classList.remove("none")
}}}
