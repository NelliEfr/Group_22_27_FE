// Вывести содержимое инпута в консоль
const show_text_btn = document.querySelector('.show_text_btn');
const show_text_input = document.querySelector('.show_text_input');

show_text_btn.addEventListener('click', () => console.log(show_text_input.value));


// Изменить цвет фона на черный
const mode_btn = document.querySelector('.mode_btn');
mode_btn.addEventListener('click', () => document.body.style.backgroundColor = 'black');

// mode_btn.addEventListener('click', () => document.body.classList.toggle('black'));


// Изменить цвет фона на цвет из массива
const colors = ['blue', 'yellow', 'pink', 'green'];
const mode_btn_color = document.querySelector('.mode_btn_color');
let colorIndex = 0;

mode_btn_color.addEventListener('click', () => document.body.style.backgroundColor = colors[colorIndex++ % colors.length]);

// colorIndex++ % colors.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0


// Изменить содержимое инпута с ??? на !!!
const change_text_btn = document.querySelector('.change_text_btn');
const change_text_input = document.querySelector('.change_text_input');

change_text_btn.addEventListener('click', () => change_text_input.value = '!!!');


// Изменить содержимое инпута на содержимое из массива
let words = ['!!!', '...', '&&&', '***', 'xxx', '---'];
let wordsIndex = 0;

const change_text_btn2 = document.querySelector('.change_text_btn2');
const change_text_input2 = document.querySelector('.change_text_input2');

change_text_btn2.addEventListener('click', () => change_text_input2.value = words[wordsIndex++ % words.length]);


// Добавить описанный в форме элемент
const add_form_elem = document.querySelector('#add_form');
const elements_result = document.querySelector('.elements_result');

add_form_elem.addEventListener('submit', (event) => {
  event.preventDefault();
  const { type, content, color } = event.target;
  const element = document.createElement(type.value);

  element.innerText = content.value;
  element.style.color = color.value;

  elements_result.append(element);
});


// Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.

let incr_btn = document.querySelector('#incr_btn');
let incr_btn_params = 30;

const incr_btn_render = (size) => {
  incr_btn.style.width = size + 'px';
  incr_btn.style.height = size + 'px';
}

incr_btn_render(incr_btn_params);

incr_btn.addEventListener('click', () =>{
  incr_btn_params += 10;
  incr_btn_render(incr_btn_params);
});


// Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона

const random_btn = document.querySelector('#random_btn');

const get_color = () => Math.round(Math.random() * 255);

random_btn.addEventListener('click', (event) => {
  event.target.style.backgroundColor = `rgb(${get_color()}, ${get_color()}, ${get_color()})`;
})

// Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).

const game_btn = document.querySelector('#game_btn');
const game_result = document.querySelector('#game_result');

const get_number = () => Math.round(Math.random() * 5 + 1);

// Math.round(Math.random() * 5) => 0 - 5
// Math.round(Math.random() * 5 + 1) => 1 - 6

game_btn.addEventListener('click', () => {
  game_result.innerText = `${get_number()} X ${get_number()}`
});


// Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).
const photos = [
'https://reqres.in/img/faces/1-image.jpg',
'https://reqres.in/img/faces/2-image.jpg',
'https://reqres.in/img/faces/3-image.jpg',
'https://reqres.in/img/faces/4-image.jpg',
'https://reqres.in/img/faces/5-image.jpg'
]

const slider = document.querySelector('#slider');
let photoIndex = 0;

slider.addEventListener('click', (event) => {
  event.target.src = photos[photoIndex++ % photos.length]
});
