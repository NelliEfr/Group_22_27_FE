// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара, которая должна включать в себя следующие данные: Артикул, наименование, цена, фотография товара, почта (почта должна быть кликабельна, перебрасывает на приложение для работы с почтовыми адресами). Данные можно взять произвольные.
//Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const artElem = document.createElement('p');
const titleElem = document.createElement('p');
const priceElem = document.createElement('p');
const imgElem = document.createElement('img');
const emailElem = document.createElement('a');

artElem.innerText = 'Art: 12345';
titleElem.innerText = 'Title: iPhone Pro 13';
priceElem.innerText = 'Price: 1300$';
emailElem.innerText = 'iphone13@gmail.com';

imgElem.setAttribute('src', 'img/iphone.png');
imgElem.setAttribute('alt', 'iphone');
emailElem.setAttribute('href', 'mailto:iphone13@gmail.com');

card.classList.add('card');
imgElem.classList.add('iphoneImg');

card.append(artElem, titleElem, priceElem, imgElem, emailElem);
rootElem.append(card);
