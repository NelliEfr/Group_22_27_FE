// Создать форму, с двумя инпутами (имя и возраст)
// При отправке формы собрать данные из инпутов
// Сформировать под формой параграф в формате 'Hello ИМЯ. Your age is ВОЗРАСТ'
// Каждый раз после отправки формы очищать инпут

const formElem = document.querySelector('.form');
const rootElem = document.querySelector('#root');

formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  rootElem.innerText = '';
  
  let text = document.createElement('p');

  let name = event.target.name.value;
  let age = event.target.age.value;

  text.innerText = `Hello ${name}. Your age is ${age}`;

  rootElem.append(text);

  event.target.name.value = '';
  event.target.age.value = '';
})
