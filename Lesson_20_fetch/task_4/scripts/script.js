const root_elem = document.querySelector('#root');
let id_num = 1;

const cardRender = (json) => {
  root_elem.innerText = '';
  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const usernameElem = document.createElement('p');
  const emailElem = document.createElement('a');
  const addressElem = document.createElement('p');

  nameElem.innerText = `Name: ${json.name}`;
  usernameElem.innerText = `Username: ${json.username}`;
  emailElem.innerText = json.email;
  addressElem.innerText = `Address: ${json.address.suite}, ${json.address.street} str., ${json.address.zipcode} ${json.address.city}`;

  emailElem.setAttribute('href', `mailto:${json.email}`);

  card.classList.add('card');

  card.append(nameElem, usernameElem, emailElem, addressElem);
  root_elem.append(card);
}

const request = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(json => cardRender(json))
}

request(id_num);

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => request(--id_num));
right_btn.addEventListener('click', () => request(++id_num));
