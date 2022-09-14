// ЗАДАЧА 2
// Сформировать fetch-запрос, использовать адреса https://reqres.in/api/users?page=1 и https://reqres.in/api/users?page=2
// Из полученных данный отрисовать интерфейс как на приложенной картинке.
// Кнопки внизу осуществляют переключение между страницами 1 и 2

const rootElem = document.querySelector('#root');

const render = (data) => {
  rootElem.innerText = '';
  const cards = data.map(({first_name, avatar}) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const imgElem = document.createElement('img');

    nameElem.innerText = first_name;
    imgElem.src = avatar;
    imgElem.alt = 'photo';

    card.append(imgElem, nameElem);
    return card
  })
  rootElem.append(...cards);
}

const request = (page_num) => {
  fetch(`https://reqres.in/api/users?page=${page_num}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
}

request(1);

const triggers = document.querySelectorAll('.triggers button');

const [first_btn, second_btn] = triggers;

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));
