//3. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov '. Обновите/переопределите переменную user, записав в неё то же самое значение, но без лишних пробелов по краям. Выведите то, что получилось, в консоль.


// let user = '   Ivan Ivanov ';
// user = user.trim();

// console.log(user);



//====================

//4. Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1 и округляет его до третьего знака после точки. Тип выводимых данных должен быть number.

// console.log(Math.ceil(5.33)) // 6
// console.log(Math.floor(3.33)) // 3
// console.log(Math.round(7.73)) // 8

// const random = Math.round(Math.random() * 10);
// const randomRounded = Math.round(random);

// console.log(random);
// console.log(randomRounded);



//====================

//5. Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:

// First: <первая буква строки>
// Last: <последняя буква строки>

const text = 'My name is Nelli';

// const firstLetter = text[0];
// const lastLetter = text[text.length - 1];

console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);


