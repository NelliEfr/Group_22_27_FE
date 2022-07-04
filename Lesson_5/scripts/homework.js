// Напишите функцию с циклом for, которая выводит числа в консоль от 100 до 0 с шагом 10.

// let showNums = () => {
//   for(let i = 100; i >= 0; i -= 10) {
//     console.log(i)
//   }
// }

// showNums();


//Напишите функцию с циклом for, которая выводит числа в консоль от 25 до 67 c шагом 3.

// let showNums = () => {
//   for(let i = 25; i <= 67; i += 3) {
//     console.log(i)
//   }
// }

// showNums();


//Напишите функцию с циклом for, которая перемножает числа от 3 до 6. Выведите результат в консоль.

// let multiplyNums = () => {
//   let result = 1;
//   for (let i = 3; i <= 6; i++) {
//     result *= i
//   }
//   return result
// }

// 3 * 4 * 5 * 6 = 360
// console.log(multiplyNums());

// let result = multiplyNums();
// console.log(result);


//Задана переменная n. Напишите функцию, которая с помощью цикла for считает сумму чисел от 1 до n и выводит в консоль.

// let getSum = (n) => {
//   let result = 0;
//   for (let i = 1; i <= n; i++){
//     result += i
//   }
//   return result
// }

// console.log(getSum(5));

// Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

// let showLetter = string => {
//   for (let i = 0; i < string.length; i++){
//     console.log(string[i])
//   }
// }

// showLetter('My name is Nelli');


// let getString = (string) => {
//       let num = string.length - 1;
//       for (let i = 0; i <= num; i++){
//          console.log(i)
//       }   
//   }

// getString("Dmitriy");

// "Dmitriy"
// 7 - длина строки
// 6 - индекс последнего элемента


// Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 и 5. Выведите сумму в консоль.

// let getSum = () => {
//   let result = 0;
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }
//   return result
// }

// console.log(getSum());
