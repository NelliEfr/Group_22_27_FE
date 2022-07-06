// let a = 5; //number
// let b = 'hello'; //string
// let c = true; //boolean

// let user = {
//   firstname: 'Irina',
//   lastname: 'Antonova',
//   age: 27,
//   active: true
// }

// console.log(user);
// console.log(user.firstname); //Nelli
// console.log(user['age']); //27

// console.log(user['first name']); //Nelli

// let d = 'age';
// console.log(user[d]);
// console.log(user.lastname);

// console.log(user.firstname, user.lastname);


//==================

const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
];

// 1. Проверьте, что этот объект не пустой - в нем есть хотя бы один объект с ключом age.
// console.log(users[0].age); //20
// console.log(users[0].hasOwnProperty('age')); //true
// console.log('age' in users[0]); //true


//2. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
// users.forEach(el => console.log(el));

//3. Получите из всех объектов значения last_name и сформируйте из этих имен массив.
// ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov']

let lastNamesArr = users.map(el => el.last_name);
// console.log(lastNamesArr);

//4. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.

let names = users.map(el => `${el.first_name} ${el.last_name} ${el.age}`);
// console.log(names);

// 5. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.

let user_olga = users.find(el => el.first_name === 'Olga');
// console.log(user_olga);

let user_salary_1500 = users.find(el => el.salary === 1500);
// console.log(user_salary_1500);


// 6. Изменить у первого элемента значение first_name == "Petr" и age == 99;
// users[0].first_name = 'Petr';
// users[0].age = 99;
// console.log(users[0]);
// console.log(users);

// === / !== сравнивает тип данных
// == / != по возможности преобразовывает тип данных

// 7. Сформируйте новый массив без объекта, где first_name == "Irina"
let newUsersArr = users.filter(el => el.first_name !== 'Irina');
// console.log(newUsersArr);

// 8. Добавьте в конец нового массива объект со значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

newUsersArr.push({
  first_name: 'Anton',
  last_name: 'Gribov',
  age: 36,
  salary: 1760
});

// console.log(newUsersArr);

//.push(), .pop(), .shift(), .unshift() - повторить


// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

let adults = users.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`);
// let adults_arr = adults.map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`)

console.log(adults);

