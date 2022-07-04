// let array = [1, 2, 3, 4, 5];

// array.push(5) //добавляет элемент в конец
// array.unshift('string') // добавляет элементв начало

// array.pop() // извлекает элемент из конца
// array.shift() // извлекает элемент из начала


// .forEach - выполняет указанную функцию для каждого элемента массива один раз


// Задача: вывести в консоль числа больше 50

// for (let i = 0; i < array.length; i++){
//   if (array[i] >= 50) {
//     console.log(array[i])
//   }
// }

// array.forEach(function(element){
//   if (element >= 50){
//     console.log(element)
//   }
// })

// array.forEach((el) => {
//   if (el >= 50){
//     console.log(el)
//   }
// })


// Каждый элемент массива умножается на 2

// for (let i = 0; i < array.length; i++){
//   console.log(array[i] * 2);
// };

// array.forEach(function(el){
//   console.log(el * 2);
// });

// array.forEach(el => console.log(el * 2));


// Сформировать массив из чисел, заканчивающихся на 5. Вывести результат в консоль

// через цикл for

// let new_arr = [];
// for (let i = 0; i < array.length; i++){
//   if (array[i] % 10 === 5) {
//     new_arr.push(array[i])
//   }
// }

// console.log(new_arr)

// через метод .forEach()

// let new_arr2 = [];
// array.forEach(el => {
//   if (el % 10 === 5) {
//     new_arr2.push(el)
//   }
// })

// console.log(new_arr2)


let array = [1, 90, 55, 3, -10, 78, 75]

// Cформировать массив из последних цифр чисел. вывести результат в консоль => [1, 0, 5, 3, 0, 8, 5]

// цикл for
let new_array = [];
for (let i = 0; i < array.length; i++){
  new_array.push(Math.abs(array[i] % 10))
}
console.log(new_array)

// метод .forEach()

let new_array2 = [];
array.forEach(el => new_array2.push(Math.abs(el %10)));
console.log(new_array2)

