const form = document.querySelector('.form');
const root_elem = document.querySelector('#root');

let render = (json) => {
  root_elem.innerText = '';

  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const emailElem = document.createElement('a');

  nameElem.innerText = json.name;
  emailElem.innerText = json.email;

  emailElem.setAttribute('href', `mailto:${json.email}`)

  card.append(nameElem, emailElem);
  root_elem.append(card);
};

let getUser = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(json => render(json))
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  getUser(id);
});
