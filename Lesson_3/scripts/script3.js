// 1. Реализуйте функцию, которая принимает в качестве аргументов 2 числа и возвращает их сумму. Выведите результат в консоль. Запишите два варианта синтаксиса (function declaration и arrow function).

//Вариант 1

function getSum(num1, num2) {
  return num1 + num2
}

// console.log(getSum(1, 2)); //3
// console.log(getSum(4, 5)); //9
// console.log(getSum(10, 85)); //95

//Вариант 2

let getSum2 = (num1, num2) => num1 + num2;

// console.log(getSum2(1, 2)); //3
// console.log(getSum2(4, 5)); //9
// console.log(getSum2(10, 85)); //95


// 2. Реализуйте функцию, которая принимает в качестве аргумента число и возвращает его абсолютное значение. Выведите результат в консоль. Запишите два варианта синтаксиса (function declaration и arrow function).

//Math.abs()

// function getAbs(num) {
//   return Math.abs(num);  
// }

// console.log(getAbs(-5));

// let getAbs2 = num => Math.abs(num);

// console.log(getAbs2(-7));


//3. Напишите функцию, которая принимает в качестве аргумента строку и возвращает ее же, но со всеми буквами в верхнем регистре. Выведите результат в консоль. Запишите два варианта синтаксиса (function declaration и arrow function).
// Используйте метод .toUpperCase()

// function getUpperCase(string){
//   return string.toUpperCase()
// }

// console.log(getUpperCase('My name is Nelli'));



// let getUpperCase2 = string => string.toUpperCase()

// console.log(getUpperCase2('My name is Nelli'));



// 5. Напишите функцию, которая примает две строки и возвращает наиболее длинную из них. Выведите результат в консоль.

// let getLongestString = (string1, string2) => {
//   if (string1.length > string2.length) {
//     return string1
//   } else if (string2.length > string1.length) {
//     return string2
//   } else {
//     return `Two strings are equal`
//   }
// }

// console.log(getLongestString('string 55', 'string 21'));

// Напишите функцию, которая принимает три аргумента: имя, фамилию и возраст. Если возраст больше или равен 18, то функция возвращает строку в формате: 'Здравствуйте, <Имя> <Фамилия>'. Если возраст меньше 18, то функция возвращает строку в формате: 'Привет, <Имя> <Фамилия>'. Выведите результат в консоль.


let getGreeting = (firstName, lastName, age) => {
  if (age >= 18) {
    return `Здравствуйте ${firstName} ${lastName}`;
  } else {
    return `Привет ${firstName} ${lastName}`;
  }
}

console.log(getGreeting('Mihail', 'Frunze', 28));
console.log(getGreeting('Nelli', 'Efremyan', 27));
console.log(getGreeting('Oleg', 'Orlov', 12));




let getAge = (age) => {
  if (age >= 18) {
    return "Здравствуйте";
  } else {
    return "Привет"
  }
}

let name = " Dmitriy ";
let lastName = " Mehl ";

let name2 = 'Nelli';
let lastName2 = 'Efremyan'


console.log(getAge(25) + name + lastName);
console.log(getAge(12) + name2 + lastName2);
