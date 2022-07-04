//1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль. Запишите два варианта синтаксиса (function declaration и arrow function).


// let getLength = (string) => `Длина строки ${string} равна ${string.length}`

// console.log(getLength('hello!'));

// 2.  Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. Запишите два варианта синтаксиса (function declaration и arrow function).

// let getNumber = (base, exp = 2) => base ** exp
// let getNumber2 = (base, exp = 2) => Math.pow(base, exp)

// console.log(getNumber(2));
// console.log(getNumber2(2, 4));


// 3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).

// let getMaxNumber = (a, b) => {
//   if (a > b) {
//     return a
//   } else if (b > a) {
//     return b
//   } else {
//     return `Two numbers are equal`
//   }
// }

// let getMaxNumber2 = (a, b) => {
//   if (a === b){
//     return `Two numbers are equal`
//   } 

//   return Math.max(a, b)
// }


// console.log(getMaxNumber2(30, 30));



// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.

// let sortNumbers = (a, b, c) => {
//   if (a > b && a > c) {
//     if (b > c) {
//       console.log(a, b, c)
//     } else {
//       console.log(a, c, b)
//     }
//   } else if (b > a && b > c) {
//     if (a > c) {
//       console.log(b, a, c)
//     } else {
//       console.log(b, c, a)
//     }
//   } else {
//     if (a > b) {
//       console.log(c, a, b)
//     } else {
//       console.log(c, b, a)
//     }
//   }
// }

// sortNumbers(5, -80, 10);


// 5. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор.

// let getMaxNumber = (a, b, c, d, e) => {
//   if(a > b && a > c && a > d && a > e) {
//     console.log(a)
//   } else if (b > a && b > c && b > d && b > e) {
//     console.log(b)
//   } else if (c > a && c > b && c > d && c > e) {
//     console.log(c)
//   } else if (d > a && d > b && d > c && d > e) {
//     console.log(d)
//   } else {
//     console.log(e)
//   }
// }

// getMaxNumber(3, 7, 1, -8, 87);




