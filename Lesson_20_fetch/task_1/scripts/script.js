// ЗАДАЧА 1
// Сформировать fetch-запрос, использовать адрес https://reqres.in/api/users
// Из полученных данный отрисовать интерфейс как на приложенной картинке


const root_elem = document.querySelector('#root');

const render = (data) => {
  const cards = data.map(({first_name, avatar}) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const photoElem = document.createElement('img');

    nameElem.innerText = first_name;
    photoElem.setAttribute('src', avatar);
    photoElem.setAttribute('alt', 'avatar');

    card.append(photoElem, nameElem);
    return card
  });

  root_elem.append(...cards);
}

fetch('https://reqres.in/api/users')
  .then(resp => resp.json())
  .then(json => render(json.data))



const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(...numbers);
console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
