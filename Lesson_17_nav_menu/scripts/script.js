// Навигационное меню

const nav_menu_btn = document.querySelector('.nav_menu_button');
const nav_menu = document.querySelector('.nav_menu');

nav_menu_btn.addEventListener('click', () => {
  nav_menu.classList.toggle('active')
});


// Модальное окно

const account_elem = document.querySelector('.account');

const cross_elem = document.querySelector('.form_cross');

const popup_elem = document.querySelector('.popup');


account_elem.addEventListener('click', () => {
  popup_elem.classList.add('visible')
});

cross_elem.addEventListener('click', () => {
  popup_elem.classList.remove('visible')
});
