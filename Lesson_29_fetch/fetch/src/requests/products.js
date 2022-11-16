export const getProducts = (callback) => {
  fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callback(json.products))
}

// Написать функцию, которая при вызове будет отправлять fetch-запрос по адресу https://dummyjson.com/products и выводить в консоль массив с объектами products

// Из каждого элемента из products сформировать компонент Product внутри ProductsContainer. Вывести продукты на экран. Свойства title, description и price.

// Использовать useContext
