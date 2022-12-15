export const getCategories = callback => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(resp => resp.json())
    .then(json => callback(json))
}
