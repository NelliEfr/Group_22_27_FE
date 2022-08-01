const rootElem = document.querySelector('.root');
const pElem = document.querySelector('.p');
const btnElem = document.querySelector('button');
const hElem = document.querySelector('#greeting');
const hhElem = document.getElementById('greeting2');


pElem.style.color = 'red';
hElem.style.backgroundColor = 'green';
btnElem.style.backgroundColor = 'red';

btnElem.classList.add('btn');
pElem.classList.remove('p2');

const containerElem = document.createElement('div');
const textElem = document.createElement('p');
textElem.innerText = 'Hello!';

const text2Elem = document.createElement('p');
text2Elem.innerText = 'произвольный текст';

containerElem.append(text2Elem);

rootElem.append(textElem, containerElem);
