/* Создать форму, с восемью инпутами (имя, фамилия, возраст, ставка, дни, email, ссылка на фото, прогресс)
При отправке формы собрать данные из инпутов и записать их в пустой массив workers в виде объекта (в формате ключ-значение).
Используя данные из массива workers, сформировать под формой карточку со следующей информацией:
Name: ИМЯ ФАМИЛИЯ
Age: ВОЗРАСТ
Salary: СТАВКА * ДНИ
EMAIL (*кликабельный)
ФОТО (*отображается фото)
ЛИНИЯ ПРОГРЕССА (*контейнер прогресса наполнен в соответствии со значением, переданным в инпут)
Каждый раз после отправки формы очищать инпуты
Карточке и форме добавить стили на выбор */

const formElem = document.querySelector('.form');
let workersArr = [];

const cardsRender = () => {
  const cardsContainer = document.querySelector('#cards_container');
  cardsContainer.innerText = '';
  workersArr.forEach(({firstname, lastname, age, rate, days, email}) => {
    const card = document.createElement('div');
    const firstnameElem = document.createElement('p');
    const lastnameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const salaryElem = document.createElement('p');
    const emailElem = document.createElement('a');

    firstnameElem.innerText = `First name: ${firstname}`;
    lastnameElem.innerText = `Last name: ${lastname}`;
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${rate * days}`;
    emailElem.innerText = email;

    emailElem.setAttribute('href', `maito:${email}`);

    card.append(firstnameElem, lastnameElem, ageElem, salaryElem, emailElem);
    cardsContainer.append(card);

  })
}

formElem.addEventListener('submit',(event) => {
  event.preventDefault();
  const { firstname, lastname, age, rate, days, email } = event.target;

  workersArr.push({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    rate: rate.value,
    days: days.value,
    email: email.value,
  });

  firstname.value = '';
  lastname.value = '';
  age.value = '';
  rate.value = '';
  days.value = '';
  email.value = '';

  console.log(workersArr);
  cardsRender();
})

