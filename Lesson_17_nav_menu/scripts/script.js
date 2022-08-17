const nav_menu_btn = document.querySelector('.nav_menu_button');
const nav_menu = document.querySelector('.nav_menu');

nav_menu_btn.addEventListener('click', () => {
  nav_menu.classList.toggle('active')
})
