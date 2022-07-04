/*

Напишите цикл for, который выводит числа в консоль от 10 до 0.

*/


// let showNumbers = () => {
//   for(let i = 0; i <= 10; i++) {
//     console.log(i)
//   }
// }

// showNumbers();

// выражение 1 - начальное значение счетчика
// выражение 2 - условие повторения цикла
// выражение 3 - изменение счетчика


// let getNumbers = () => {
//   for(let i = 10; i >= 0; i--) {
//     console.log(i)
//   }
// }

// getNumbers();



// Напишите цикл for, который выводит числа в консоль от 0 до 10 c шагом 2.

// 0, 2, 4, 6, 8, 10


//Напишите цикл for, который выводит числа в консоль от 5 до 10.

// let getNumbers = () => {
//   for (let i = 5; i <= 10; i++) {
//       console.log (i);
//   }
// }
// getNumbers();


// const showNumbersInArr = () => {
//   let result = [];
//   for (let i = 0; i <= 10; i++){
//     result.push(i)
//   }
//   return result
// };

// console.log(showNumbersInArr());


// const showNumbersInString = () => {
//   let result = '';
//   for (let i = 0; i <= 10; i++){
//     result += i
//   }
//   return result
// }

// console.log(showNumbersInString());



// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n. 

// let getNumbers = (n, m) => {
//   for (let i = m; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i)
//     }
//   }
// }

// getNumbers(100, 75);



// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего.


// let getNumbers = (n, m) => {
//   if (n > m) {
//     for (let i = n; i >= m; i--) {
//       console.log(i)
//     }
//   } else if (m > n) {
//     for (let i = m; i >= n; i--) {
//       console.log(i)
//     }
//   } else {
//     console.log(`Number ${n} and number ${m} are equal`)
//   }
// }

// getNumbers(45, 45);



//Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.

// let getSum = () => {
//   let result = 1;
//   for (let i = 1; i <= 4; i++){
//     result *= i
//   }
//   return result
// }

// console.log(getSum());


// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 

// 1. у функции есть аргументы n и m
// 2. найти два числа
// 3. выполнить проверку на четность/нечетность

let getSum = (n, m) => {
  let evenResult = 0;
  let oddResult = 0;
  for(let i = n; i <= m; i++){
    if(i % 2 === 0){
      evenResult += i;
    } else {
      oddResult +=i
    }
  }
  console.log(`Сумма четных чисел в диапазоне от ${n} до ${m} равна ${evenResult}`);
  console.log(oddResult);
}

getSum(1, 5);

