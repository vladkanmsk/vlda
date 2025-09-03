//1.1.1

// let a = Math.random()-0.5
// console.log(a)
// if(a < 0 ){
    // console.log("число відємне")
// }


//1.1.2

// let str = "Hello!!"
// console.log(str.length)

// //1.1.3

// let str1 = "HELLO"
// console.log(str1.length)
// console.log(str1[str1.lenght - 1])

// //1.1.4

// let a = 546

// if(a % 2){
//     console.log(1)
// }else{
//     console.log(0)
// }

// //1.1.5
// let slovo1 = "Hello"
// let slovo2 = "HELP"
// if (slovo1[0] == slovo2[0]){
//     console.log("ОК")
// }

//1.1.6

// let str = "КАРУСЕЛЬ"
// let str1 = "КАРУСЕЛ"
// let lastLetter = str[str.length - 1]
// let lastLetter1 = str1[str1.length - 1]
// if(lastLetter == 'Ь'){
//     console.log("мгкий знак о ноу")
//     console.log(str[str.length - 2])
// }else{
//     console.log(lastLetter)
// }

//1.2.1

// let a = 11
// a = String(a)
// console.log(a[0])

//1.2.2

// let a = 123
// a = String(a)
// console.log(a[a.length - 1])

//1.2.3

// let a = 12345
// a = String(a)
// let sum = Number(a[0]) + Number(a[a.length -1])
// console.log(sum)

//1.2.4

// let a = "НОВЫЙ"
// let str = a.length
// if(str > 1){
//     console.log(a[a.length - 2])
// }

//1.2.5

// let num1 = 4535
// let num2 = 45334
// num1 = String(num1)
// num2 = String(num2)
// let lastLetter1 = num1[num1.lenght-1]
// let lastLetter2 = num2[num2.lenght-1]
// console.log(lastLetter2)
// if(lastLetter1 == lastLetter2){
// console.log("есть пробитие")
// }
// let firstLetter1 = num1[0]
// let firstLetter2 = num2[0]
// if(firstLetter1 == firstLetter2){
// console.log("есть пробитие")
// }

//1.3.2

// let num1 = 12
// let num2 = 2
// if(num1 % num2){
//     console.log("нет")
// }else{
// console.log("да")
// }

//1.4.1

// for (let i = 1; i < 101; i++) {
//     console.log(i)
// }

//1.4.2

// for (let i = -100; i < 1; i++) {
//     console.log(i)
// }

//1.4.3

// for (let i = 100; i > 0; i--) {
//     console.log(i)
// }

//1.4.4

// for (let i = 1; i < 101; i++) {
//     if(!(i%2)){
//         console.log(i)
// }}

//1.4.5

// for (let i = 1; i < 101; i++) {
//     if(!(i%3)){
//         console.log(i)
// }}

//1.5.1

// let sum = 0
//  for (let i = 0; i <= 100; i++){
//     sum = sum + i
//  }
//  console.log(sum)


//1.5.2
// let sum = 0
//  for (let i = 0; i <= 100; i++){
//     if(i%2==0){
//         sum = sum + i
// }}
// console.log(sum)

//1.5.4

// let num1 = 23123123
// let num2 = 7
// let osta4a = num1%num2
// console.log(osta4a)

//1.5.5

// let str = "krutoeslovo123"
// for (let i = str.length-1; i >= 0 ; i--) {
//     console.log(str[i])
// }

// let str = "krutoeslovo123"
// let sum = 0
// for (let i = str.length; i >= 0 ; i--) {
//     if(str[i] == 'o'){
//         sum = sum + 1
// console.log()
//     }
// }
// console.log(sum)

//1.6.1

// const arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum = sum + element*element
//     console.log(sum)
// }
// console.log(sum)

//1.6.2

// const arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += Math.sqrt(element)
//     console.log(sum)
// }
// console.log(sum)

//1.6.3

// const array = [-5,12,-4,12,-23,43,5]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element > 0){
//         sum += element
//     }
// }
// console.log(sum)

// 1.6.4
// const array = [10,11,12,13,14,15,16,17,18,19,20]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element > 10 && element%2==0 && element < 20 ){
//         sum += element
//     }
// }
// console.log(sum)

//1.7.1

// let str = "abcde"
// const arr = []
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     arr.push(element)
// }

//1.7.2

// let num = 12345
// num = String(num)
// const arr = []
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     arr.push(Number(num[i]))
    
// }
// console.log(arr)

//1.7.3
// let str = "slovo"
// for (let i = str.length-1; i >= 0 ; i--) {
//     console.log(str[i])
// }

//1.8.1

// const arr = []
// for (let i = 1; i < 11 ; i++) {
//     arr.push(i)
    
// }
// console.log(arr)

