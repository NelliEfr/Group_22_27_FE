/*

ЗАДАЧА 1
Реализуйте класс Car (Машина), который будет иметь следующие свойства:
name (марка), model (модель), country (страна изготовитель), volume (объем двигателя)
Создайте экземпляр этого класса
Выведете в консоль все свойства созданного экземпляра класса

*/


class Car {
  constructor(name, model, country, volume){
    this.name = name;
    this.model = model;
    this.country = country;
    this.volume = volume;
  }
}

const car_1 = new Car('Toyota', 'RAV4', 'Japan', 2.4);
// console.log(car_1);
// console.log(car_1.name); // 'Japan'
// console.log(car_1.model); // 'Japan'
// console.log(car_1.country); // 'Japan'
// console.log(car_1.volume); // 'Japan'


// const car_1 = {
//   name: 'Toyota',
//   model: 'RAV4',
//   country: 'Japan',
//   volume: 2.4
// }


/*

ЗАДАЧА 2
Реализуйте класс Country (Страна), который будет иметь следующие свойства:
name (имя), capital (столица), population (численность населения), climat (климат)
Создайте 3 экземпляра этого класса с разными свойствами
Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса

*/

class Country {
  constructor(name, capital, population, climat){
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.climat = climat;
  }

  getInfo(){
    console.log(`Contry: ${this.name}, Capital: ${this.capital}, Population: ${this.population}, Climat is ${this.climat}!`)
  }
}

const country_1 = new Country('Germany', 'Berlin', 9000000, 'bad');
const country_2 = new Country('Italy', 'Rome', 7000000, 'good');
const country_3 = new Country('Russia', 'Moscow', 140000000, 'terrible');

// console.log(country_1.name);
// console.log(country_2.capital);
// console.log(country_1.population);

country_1.getInfo();
country_2.getInfo();
country_3.getInfo();
