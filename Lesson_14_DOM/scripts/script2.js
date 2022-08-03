const users = [
  {
  id: 1,
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  last_name: "Lawson",
  avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
  id: 2,
  email: "lindsay.ferguson@reqres.in",
  first_name: "Lindsay",
  last_name: "Ferguson",
  avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
  id: 3,
  email: "tobias.funke@reqres.in",
  first_name: "Tobias",
  last_name: "Funke",
  avatar: "https://reqres.in/img/faces/9-image.jpg"
  }
];

const rootElem = document.querySelector('.root');

users.forEach(({id, first_name, last_name, email, avatar}) => {
  const card = document.createElement('div');
  const idElem = document.createElement('p');
  const fullNameElem = document.createElement('p');
  const emailElem = document.createElement('a');
  const imgElem = document.createElement('img');
  const emailTextElem = document.createElement('p');

  idElem.innerText = `ID: ${id}`;
  fullNameElem.innerText = `Full name: ${first_name} ${last_name}`;
  emailElem.innerText = email;
  emailTextElem.innerText = 'Email: ';

  card.classList.add('card');
  emailTextElem.classList.add('emailText');
  imgElem.classList.add('avatar');

  emailElem.setAttribute('href', `mailto:${email}`);
  imgElem.setAttribute('src', avatar);
  imgElem.setAttribute('alt', 'avatar');

  card.append(idElem, fullNameElem, emailTextElem, emailElem, imgElem);
  rootElem.append(card);
})
