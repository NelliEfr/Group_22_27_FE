const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const SEARCH_PRICE = 'SEARCH_PRICE';

export const loadProducts = payload => ({ type: LOAD_PRODUCTS, payload });
export const sortProducts = payload => ({ type: SORT_PRODUCTS, payload });
export const searchPrice = payload => ({ type: SEARCH_PRICE, payload });

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS){
    return action.payload
  } else if (action.type === SORT_PRODUCTS) {
    if (state.length === 0) return state
    if (action.payload === 'default'){
      return state
    } else if(typeof state[0][action.payload] === 'string') {
      state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
    } else {
      state.sort((a, b) => a[action.payload] - b[action.payload])
    }
    return[...state]
  } else if (action.type === SEARCH_PRICE) {
    const { min_value, max_value } = action.payload;
    return state.map(el => {
      if (el.price >= min_value && el.price <= max_value){
        el.hide_mark = false
      } else {
        el.hide_mark = true
      }
      return el
    })
  } else {
    return state
  }
}

// const user = {
//   name: 'Nelli',
//   age: 27
// }

// console.log(user.name); // Nelli
// console.log(user['name']); // Nelli
