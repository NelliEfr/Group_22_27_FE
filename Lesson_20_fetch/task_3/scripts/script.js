const rootElem = document.querySelector('#root');
let id_num = 1;

const render = (json) => {
  rootElem.innerText = '';
  const card = document.createElement('div');
  const task = document.createElement('p');
  const status = document.createElement('p');

  const state = json.completed ? 'done' : 'not done';
  const color = json.completed ? 'lightgreen' : 'lightgray';

  task.innerText = `Task: ${json.title}`;
  status.innerText = `Status: ${state}`;

  card.classList.add('card');
  card.style.backgroundColor = color;

  card.append(task, status);
  rootElem.append(card);
}

const request = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

request(id_num);

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => request(--id_num));
right_btn.addEventListener('click', () => request(++id_num));



