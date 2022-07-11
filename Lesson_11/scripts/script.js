const people = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
  },

  {
    first_name: 'Petr',
    last_name: 'Petrov',
    age: 12,
    city: 'Berlin',
    country: 'Germany'
  },

  {
    first_name: 'irina',
    last_name: 'Alexandrova',
    age: 46,
    city: 'Paris',
    country: 'France'
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    city: 'Rome',
    country: 'Italy'
  }
];

// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

const new_people = people.map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country})`);
// console.log(new_people);

//2. Сформируйте массив из людей, чьи имена начинаются на 'I' (регистр буквы может быть и нижним)
const new_people_2 = people.filter(el => el.first_name[0].toUpperCase() === 'I');
// console.log(new_people_2);

// let str = 'hello';
// console.log(str[0].toUpperCase()); // H
// console.log(typeof str[0]); //string


//3. Получите из массива объект, где страной проживания человека является 'Germany'
const new_people_3 = people.find(el => el.country === 'Germany');
const new_people_4 = people.filter(el => el.country === 'Germany');
// console.log(new_people_3);
// console.log(new_people_4);



//====================

//Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27



let user = {
  first_name: 'Ivan',
  last_name: 'Ivanov',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
};

// console.log(user.age); // 20
// console.log(user.first_name); // 'Ivan'

let age_key = 'age';
let first_name_key = 'first_name';
// console.log(user[age_key]); // 20
// console.log(user[first_name_key]); // 'Ivan'


const getProperty = (obj, key) => obj[key]

function getProperty1(obj, key) {
  return obj[key]
}

// console.log(getProperty(user, 'first_name')); // Ivan
// console.log(getProperty(user, 'city')); // Moscow
// console.log(getProperty(user, 'age')); // 20

// console.log(getProperty1(user, 'first_name')); // Ivan
// console.log(getProperty1(user, 'city')); // Moscow
// console.log(getProperty1(user, 'age')); // 20

const getProperty2 = (arr, key) => arr.map(el => el[key])

console.log(getProperty2(people, 'first_name')); // ['Ivan', 'Petr', 'irina', 'Denis']
console.log(getProperty2(people, 'age')); // [20, 12, 46, 30]
console.log(getProperty2(people, 'country')); // 
