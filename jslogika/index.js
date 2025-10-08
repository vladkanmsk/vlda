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


//1.9.1

// const arr = [
//     "http://skhdgdfhf;.com",
//      "fgdsfg.com",
//       "difhgoisdhf.com",
//        "http://youtube.com"
// ]
// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.startsWith ("http://")) {
//         console.log("robit")
//         newArr.push(element)
//     }
// }
// console.log(newArr)

//1.9.2

// const arr = [
//     "http://skhdgdfhf;.com",
//      "fgdsfg.com",
//       "difhgoisdhf.com",
//        "youtube.html"
// ]
// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.endsWith (".html")) {
//         console.log("robit")
//         newArr.push(element)
//     }
// }
// console.log(newArr)

//1.9.3

// const arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += arr[i]*0.1
// }
// console.log(arr)

//1.10.1

// const arr = []

// for (let i = 0; i < 100; i++) {
//     arr.push(Math.round(Math.random()*100))
// }
// console.log(arr)

//1.10.2


// let num = Math.round(Math.random()*10000)

// console.log(num)

// num = String(num)

// for (let i = num.length-1; i >= 0; i--) {
//     const element = num[i];
//     console.log(element)
// }


//1.10.3

// const array = [1,2,3,4,5,6]

// for (let i = 0; i < array.length; i++) {
//     if (i%2==0) {
//         const element = array[array.length-1-i];
//         const element1 = array[array.length-2-i];
//         console.log([element, element1 ])
//     }}

//1.10.4

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// console.log(arr1.concat(arr2))


//2.1.1

// let num = 1230340360450640
// let array = String(num)
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element == "0") {
//         console.log(i)
//         break
//     }
// }

//2.1.2

// for (let i = 0; i <= 1000; i++) {
//     let sum = Number(String(i)[0]) + Number(String(i)[1])
//     if (sum == 5) {
//         console.log(i)
// }}

//2.1.3

// const array = [1,2,3,4,5,6,7,8,9,10,11,22,33]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element%2){
// array.splice(i, 1)
// }}
// console.log(array)

//2.1.4

// const array = [1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0]
// let sum = 0
// for (let i = 0; i < array.length/2; i++) {
//     const element = array [i];
//     sum += element
// }
// console.log(sum)

//2.2.1

// const array = [1,2,3,-1,3,-2,-5,-0,-2,13,0,-21,23]

// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element < 0) {
//         sum += 1
//     }
// }
// console.log(sum)

//2.2.2

// const array = [1,2,3,-1,3,-2,-5,-0,-2,13,0,-21,23]

// for (let i = array.length; i > 0; i--) {
//     const element = array[i];
//     if (element <= 0) {
//         array.splice(i,1)
//     }
// }
// console.log(array)

//2.2.3

// let str = "ABABAKEasfdasfarbawebsDABRA"
// let newStr = str.slice(0, str.length-2) + str.slice(-1)
// console.log(newStr)
// // console.log(newStr1)
// console.log(str)

//2.2.4

// const array = [1,2,3,4,5,6]

// let sum1 = 0
// let sum2 = 0

// for (let i = 0; i < array.length/2; i++) {
//     const element = array[i];
//     sum1 += element
// }
// console.log(sum1)
// for (let i = array.length-1; i >= array.length/2; i--) {
//     const element = array[i];
//     sum2 += element
// }
// console.log(sum2)
// console.log(sum1/sum2)

//2.3.1

// let word1 = "word"
// let word2 = "drow"

// let let1 = word1[word1.length-1]
// let let2 = word2[0]

// if (let1 == let2) {
//     console.log('+++')
// }

//2.3.2

// let str = "kjasfjawfak-fa=f-ajf09af-as0f0-as9f0a-sfa90isf9af0as9f-asf-"
// let count = 0
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element == 0){
//         count += 1
//         if (count ==3 ) {
//             console.log('количество', count)
//             console.log(element)
//             console.log(i)
//         }
//     }
// }

//2.3.3

// let str = '12,34,56'
// let sum = 0
// let parts = str.split(",")
// console.log(parts)

// for (let i = 0; i < parts.length; i++) {
//     const element = parts[i];
//     let a = Number(element)
//     console.log(a)
//     sum += a
// }
// console.log(sum)

//2.3.4

// const obj = {
//     year: "",
//     month: "",
//     day: "",
// }
// let str = '2025-12-31'
// let parts = str.split("-")
// obj.year = parts[0]
// obj.month = parts[0]
// obj.day = parts[0]
// console.log(parts)
// console.log(obj)


//2.4.1

// let str = "asdasd123asdasd"

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element)
//     if (isNaN(element) == false) {
//         console.log("robit", i)
//         break
// }}

//2.4.2

// const obj = {
//     qwe:123,
//     qwe1:234,
//     qwe2:345,
//     qwe3:456
// }
// let arr1 = Object.keys(obj)
// console.log(arr1)
// let arr2 = Object.values(obj)
// console.log(arr2)

//2.4.3

// let num = 12345678990
// let count = 0
// num = String(num)
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (element%2 == 0) {
//         count += 1
// }}
// console.log(count)

//2.4.4

// let str = "abcde"
// newstr = ""
// for (let i = 0; i < str.length; i=i+2) {
//     const element = str[i];
//     newstr = str.replace(element, element.toUpperCase)
//     str = newstr
// }
// console.log(newstr)

//2.4.5

// let str = "aaa bbb ccc"
// let newstr = str
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (str[i-1] == " " || !str[i-1]) {
//         newstr = str.replace(str[i+1], str[i+1].toUpperCase())
//         str=newstr
//     }
// }
// console.log(newstr)

//2.5.1

// let str = '023m0df0dfg0'
// let arr = []

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == 0) {
//         console.log(element, i)
//         arr.push(i)
//     }
// }
// console.log(arr)

//2.5.2

// let str = 'abcdefg'
// let newStr = ''
// for (let i = 0; i < str.length; i++) {
//     const element = str[i] 
//     if (i==2 || i==5) {
//         continue
//     }
//     newStr += element
// }
// console.log(newStr)

 //2.5.3

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let sumeven = 0
// let sumodd = 0
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i%2 == 0) {
//         console.log(element)
//         sumeven += element
//     }else{
//         sumodd += element
//     }
// }
// console.log(sumeven/sumodd)

//2.6.1

// let str = "a1a2a3a4a5"
// let arr = []
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (Number(element)) {
//         console.log(element, i)
//         arr.push(i)
//     }
// }
// console.log(arr)

//2.6.2

const arr = ["123", "456", "789"]
const arr1 = []
let anew = ''
for (let i = 0; i < 3; i++) {
    for (let j = arr[i].length-1; j >= 0; j--) {
        const element = arr[i][j];
        console.log(element)
        anew += element
    }

arr1[i] = (anew)
anew = ''   
}
console.log(arr1)