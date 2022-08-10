// Создать форму, с четырьмя инпутами (имя, возраст, ставка, дни)
// При отправке формы собрать данные из инпутов
// Сформировать под формой карточку с тремя параграфами:

// Name: ИМЯ
// Age: ВОЗРАСТ
// Salary: СТАВКА * ДНИ

// Каждый раз после отправки формы очищать инпуты
//Карточке добавить стили на выбор

//Добавить два инпута: email (адресс почты, кликабельный) и photo (ссылка на фото)
// Собранная информация добавляется в карточку


const formElem = document.querySelector('.form');

formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerText = '';

  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const emailElem = document.createElement('a');
  const photoElem = document.createElement('img');

  let name = event.target.name.value;
  let age = event.target.age.value;
  let rate = event.target.rate.value;
  let days = event.target.days.value;
  let email = event.target.email.value;
  let photo = event.target.photo.value;

  nameElem.innerText = `Name: ${name}`;
  ageElem.innerText = `Age: ${age}`;
  salaryElem.innerText = `Salary: ${rate * days}`;
  emailElem.innerText = email;

  emailElem.setAttribute('href', `mailto:${email}`);
  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', 'photo');

  card.classList.add('card');
  photoElem.classList.add('photo');
    
  card.append(nameElem, ageElem, salaryElem, emailElem, photoElem);
  cardsContainer.append(card);

  event.target.name.value = '';
  event.target.age.value = '';
  event.target.rate.value = '';
  event.target.days.value = '';
  event.target.email.value = '';
  event.target.photo.value = '';
})
