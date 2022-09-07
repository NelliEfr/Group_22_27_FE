const rootElem = document.querySelector('#root');

const render = (json) => {
  const cards = json.map(({title, completed}) => {
    const card = document.createElement('div');
    const task = document.createElement('p');
    const status = document.createElement('p');

    const state = completed ? 'done' : 'not done';
    const color = completed ? 'lightgreen' : 'lightgray';

    task.innerText = `Task: ${title}`;
    status.innerText = `Status: ${state}`;

    card.classList.add('card');
    card.style.backgroundColor = color;

    card.append(task, status);
    return card
  });

  rootElem.append(...cards);
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(json => render(json))


