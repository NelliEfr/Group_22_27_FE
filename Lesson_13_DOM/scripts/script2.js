const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const idElem = document.createElement('p');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const emailElem = document.createElement('a');
const photoElem = document.createElement('img');

idElem.innerText = 'ID: 1';
firstNameElem.innerText = 'First name: Michael';
lastNameElem.innerText = 'Last name: Lawson';
emailElem.innerText = 'michael.lawson@reqres.in';

card.classList.add('cardContainer');
photoElem.classList.add('photo');

emailElem.setAttribute('href', 'mailto:michael.lawson@reqres.in');
photoElem.setAttribute('src', 'https://reqres.in/img/faces/7-image.jpg');
photoElem.setAttribute('alt', 'photo');

card.append(idElem, firstNameElem, lastNameElem, emailElem, photoElem);
rootElem.append(card);

