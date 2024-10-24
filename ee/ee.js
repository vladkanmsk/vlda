let arr1 = []
for (let i = 0; i <= 100; i++) {
    arr1.push(i);
    const element = arr1 [i]

}

console.log(arr1);

let sum=0
for (let i=0; i < arr1.length; i++){
    sum = sum + arr1 [i]
}









const array = [];
let number = Math.ceil(Math.random()*100);
console.log(number);
Math.round(Math.random()*100)
for (let i = 0; i < 100 ; i++) {
    let number = Math.ceil(Math.random()*100);
array.push(number);
}
console.log(array);

console.log(Math.sqrt(array[0]))
let suum = 0
for (let i = 0; i < 100 ; i++) {
    console.log(Math.sqrt(array[i]))
    suum += Math.sqrt(array[i])
}
console.log(suum)