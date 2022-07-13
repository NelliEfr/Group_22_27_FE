// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
//rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.

// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней amount)


class Worker {
  constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary(){
    return this.rate * this.days
  }

  add_days(amount){
    return this.days += amount
  }

  delet_days(amount){
    return this.days -= amount
  }
}

const worker_1 = new Worker('Ivan', 'Ivanov', 100, 22);
const worker_2 = new Worker('Petr', 'Petrov', 50, 10);

worker_1.add_days(10); // 32
worker_1.add_days(10); // 42
console.log(worker_1);
