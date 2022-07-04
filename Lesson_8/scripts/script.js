//.reduce() - служит для того, чтобы мы получили какое-то финальное значение, совершив итерацию по массиву. Колбэк принимает в себя два параметра accumulator (currentValue, previousValue, total) и итерируемый элемент (nextValue);

// let arr = [2, 1, 2, 3, 4, 5];

// let sum = arr.reduce((total, el) => total + el);

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// console.log(sum);


//========================

let arr = [33, 54, 12, 1, 4]; // Найти среднеарифметическое

let result = arr.reduce((total, el) => total + el) / arr.length;

console.log(result);
