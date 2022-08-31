// let a = 15;

// setTimeout(() => {
//   a = 100;
//   console.log(a);
// }, 2000);


// console.log(a);


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(a = 100)
//   }, 2000)
// });

// promise.then(() => console.log(a));

// console.log(a);



//=================================

// const random = new Promise((resolve, reject) => {
//   let r = Math.random();
//   if(r >= 0.5){
//     resolve()
//   } else {
//     reject()
//   }
// });

// random.then(
//   () => console.log('успех'),
//   () => console.log('поражение')
// );


//=================================

fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос на сервер
  .then(resp => resp.json()) // получает respone, преобразовывем в json
  .then(json => console.log(json)) // получаем json, выводим его в консоль
