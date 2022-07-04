// Задан массив:
// let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];


// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.

// arr.unshift(67);
// arr.push(56);


// 2. Сформируйте массив из чисел меньше 100. Предложите два варианта решения (цикл for и метод .forEach). Выведите в консоль результат.

// let arr_result = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] < 100){
//     arr_result.push(arr[i]);
//   }
// }

// arr.forEach((el) => {
//   if (el < 100) {
//     arr_result.push(el)
//   }
// })

// let arr_result = arr.map(el => {
//   if (el < 100) {
//     return el
//   }
// })

// let arr_result = arr.filter(el => {
//   return el < 100
// })

// let arr_result = arr.filter(el => el < 100);

// console.log(arr_result);

// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7. Предложите два варианта решения (цикл for и метод .foreach).

// let new_arr = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] % 10 === 7){
//     new_arr.push(arr[i])
//   }
// }

// arr.forEach(el => {
//   if (el % 10 === 7){
//     new_arr.push(el)
//   }
// })

// let arr_new = arr.filter(el => el % 10 === 7 || el % 10 === 5 || el % 10 === 0);


// console.log(arr);
// console.log(arr_new);

// 4. Сформируйте массив, в котором числа больше или равно 100 заменены на строку '>100', а числа меньше ста - на '<100'

// let arr_new = [];
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] >= 100){
//     arr_new.push('>=100');
//   } else {
//     arr_new.push('<100');
//   }
// }

// arr.forEach(el => {
//   if (el >= 100){
//     arr_new.push('>=100');
//   } else {
//     arr_new.push('<100');
//   }
// })

// let new_arr_6 = arr.map(el => {
//   if (el >= 100) {
//     return ('>=100');
//   } else {
//     return ('<100');
//   }
// });

// const result = arr.map(x => (x <= 100) ? "<100" : ">100");

// console.log(result);

// let arr = [67, 137, 5, 84, 299, 777, 500, 1, 8, 17, 56];

// arr.forEach(el => console.log(el));


// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//       callback(arr[i]);
//   }
// }

// forEach(arr, console.log)


// Дан массив из строк. Сформировать массив только из слов длиннее 10 символов. Вывести результат в консоль.

// let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

// const result = arr.filter(el => el.length > 10);

// console.log(result);


//Дан массив из разных типов данных. 
//Необходимо сформировать новый массив, состоящий только из чисел (если значение не число, то подставить 'не число')

let arr = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// [8, 'не число', 'не число', 'не число', 'не число', 122, 'не число', 15]

// let new_arr = arr.map (el => {
//   if (typeof (el) === "number") {
//       return el
//   } else {
//       return "не число"
//   }
// })

let new_arr = arr.map(el => (typeof(el) === "number") ? el : "не число");

const result = arr.map(el => (typeof(el) !== 'number') ? 'не число' : el);

console.log(result);

