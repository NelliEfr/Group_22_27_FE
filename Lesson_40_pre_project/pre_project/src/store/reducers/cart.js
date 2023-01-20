const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const CART_INCREMENT = 'CART_INCREMENT';
const CART_DECREMENT = 'CART_DECREMENT';

export const addToCart = payload => ({ type: ADD_TO_CART, payload});
export const clearCart = () => ({ type: CLEAR_CART });
export const cartIncrement = payload => ({ type: CART_INCREMENT, payload});
export const cartDecrement = payload => ({ type: CART_DECREMENT, payload});

const checkProduct = (state, payload) => {
  const product_in_state = state.find(el => el.id === payload.id);
  if (product_in_state){
    product_in_state.count++
    return [...state]
  } else {
    return [...state, {...payload, count: 1}]
  }
}

export const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if(action.type === CLEAR_CART) {
    return defaultState
  } else if (action.type === CART_INCREMENT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if (action.type === CART_DECREMENT) {
    const target_card = state.find(el => el.id === action.payload);
    if (target_card.count === 1){
      state = state.filter(el => el.id !== action.payload)
    } else {
      target_card.count--
    }
    return [...state]
  } else {
    return state
  }
}
