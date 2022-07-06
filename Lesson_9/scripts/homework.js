// let arr = [0, 1, 2, 3, 4];

// let arr_spliced = arr.splice(2);

// console.log(arr); // [0, 1]
// console.log(arr_spliced); // [2, 3, 4]


// let arr = [34, 4, 1, 3, 5, 0, 9, 5, 0, 3];

// let sum = arr.reduce((total, el) => (total + arr[0,1,2])); // I have also tried this way

// let sum = arr.reduce((total, el, i, arr) => {
//     if (el === 0) {
//         arr.splice(1);
//     }
//     return total += el;
// });

// console.log(sum);
// console.log(arr);


//================

// Дан массив с числами. Найдите сумму элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let array = [0, 34, 4, 1, 3, 5, 0, 9, 5, 0, 1];

// let sum = 0;
let result = array.reduce((total, el, _, arr) => {
  if(el === 0){
    arr.splice(0);
  } 
  return total + el
  
}, 0);

//без 0 -> total == 0 (из массива), el == 34
//c 0 -> total == 0 (из аргумента), el == 0

console.log(result);



let arr1 = [1, 2, 3];
let sum = arr1.reduce((total, el) => {
  return total + el
}, 0); 
// c числом -> total == число, el == первый элемент массива
// без числа -> total == первое число массива, el == второй элемент массива

let arr2 = [1, 2, 3, 4, 5];
let res = arr2.splice(0);

console.log(res);


