// let arr = [0, 1, 2, 3, 4];

// let arr_spliced = arr.splice(2);

// console.log(arr); // [0, 1]
// console.log(arr_spliced); // [2, 3, 4]


let arr = [34, 4, 1, 3, 5, 0, 9, 5, 0, 3];

// let sum = arr.reduce((total, el) => (total + arr[0,1,2])); // I have also tried this way

let sum = arr.reduce((total, el, i, arr) => {
    if (el === 0) {
        arr.splice(1);
    }
    return total += el;
});

console.log(sum);
// console.log(arr);


//================

// Дан массив с числами. Найдите сумму элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// let arr = [0, 34, 4, 1, 3, 5, 0, 9, 5, 0, 3];

// let sum = 0;
// arr.reduce((total, el) => {
//   if(el === 0){
//     sum = total
//   } else {
//     return total + el
//   }
// })

// console.log(sum);

//Может быть сработает через метод .find()
