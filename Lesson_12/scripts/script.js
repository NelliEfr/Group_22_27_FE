// Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
  constructor(name, major, number){
    this.name = name;
    this.major = major;
    if(number === undefined){
      this.number = 15
    } else {
      this.number = number;
    }
  }

  add_student(){
    this.number += 1;
  }

  delete_student(){
    this.number -= 1;
  }
}

const group_22_27 = new Group('Group 22/27', 'Frontend', 4);
const group_28_29 = new Group('Group 28/29', 'Backend');


// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив 

let all_groups_arr = [];

const all_groups = (group_name, group_major, group_amount) => {
  all_groups_arr.push(new Group(group_name, group_major, group_amount))
}

all_groups('Group 22/27', 'Frontend', 4);
all_groups('Group 28/29', 'Backend');
all_groups('Group 30/31', 'QA', 20);

console.log(all_groups_arr);

// [
//   {
//     name: 'Group 22/27',
//     major: 'Frontend',
//     number: 4
//   },

//   {
//     name: 'Group 28/29',
//     major: 'Backend',
//     number: 15
//   },

//   {
//     name: 'Group 30/31',
//     major: 'QA',
//     number: 20
//   }
// ]
