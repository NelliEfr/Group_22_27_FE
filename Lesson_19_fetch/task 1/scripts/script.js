const root_elem = document.querySelector('#root');
let id_num = 1;

let render = (json) => {
  root_elem.innerText = '';
  const info = document.createElement('div');
  info.innerText = `${json.name} ${json.phone}`
  root_elem.append(info);
}

let request = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(resp => resp.json())
  .then(json => render(json))
}

request(id_num);

const [left_button, right_button] = document.querySelectorAll('.triggers button');

left_button.addEventListener('click', () => request(--id_num));
right_button.addEventListener('click', () => request(++id_num));

//ДЗ: Зациклить индексы пользователей. Если индекс доходит до 11, то присвоить 0. Если доходит до -1, то присвоить 10.

