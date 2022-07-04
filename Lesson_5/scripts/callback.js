// function squareTwo(){
//   return 2 ** 2
// }

// function squareThree(){
//   return 3 ** 2
// }

// function squareNum(num){
//   return num ** 2
// }

// squareNum(5);
// squareNum(2);
// squareNum(4);



// function squareNum(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         result.push(arr[i] ** 2)
//       }
//       return result
//     }
    
//     console.log(squareNum(array));
    
    
// function divideNum(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//       result.push(arr[i] / 2)
//     }
//     return result
// }
        
// console.log(divideNum(array));
        

let array = [1, 2, 3, 4, 5];

function changeNum(arr, callback){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(callback(arr[i])) // передаем инструкции и работаем с одним элементом массива
  }
  return result
}

function squareNum(num){
  return num ** 2
}

function divideNum(num){
  return num / 2
}

function minusNum(num){
  return num - 1
}

console.log(changeNum(array, squareNum));
console.log(changeNum(array, divideNum));
console.log(changeNum(array, minusNum));



