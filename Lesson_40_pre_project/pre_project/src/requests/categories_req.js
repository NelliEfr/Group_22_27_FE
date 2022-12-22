import { loadCategories } from "../store/reducers/categories";

export const load_categories = dispatch => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(resp => resp.json())
    .then(json => dispatch(loadCategories(json)))
}
