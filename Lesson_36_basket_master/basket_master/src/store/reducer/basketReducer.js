const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';
const COUNT_INCREMENT = 'COUNT_INCREMENT';
const COUNT_DECREMENT = 'COUNT_DECREMENT';

export const addToBasket = payload => ({ type: ADD_TO_BASKET, payload });
export const clearBasket = () => ({ type: CLEAR_BASKET });
export const countIncrement = payload => ({ type: COUNT_INCREMENT, payload });
export const countDecrement = payload => ({ type: COUNT_DECREMENT, payload });

const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id); // находим элемент в стейте
  if(productInState){
    productInState.count++
    return [...state]
  } else {
    return [...state, {...payload, count: 1}]
  }
}

// нужно проверять, есть ли товар в массиве
// если нет - то добавлять новый объект в массив с count 1
// если да - то увеличивать свойство count на 1

export const basketReducer = (state = defaultState, action) => {
  if(action.type === ADD_TO_BASKET){
    return checkProduct(state, action.payload)
  } else if (action.type === CLEAR_BASKET) {
    return defaultState
  } else if (action.type === COUNT_INCREMENT) {
    state.find(el => el.id === action.payload).count++;
    return [...state]
  } else if (action.type === COUNT_DECREMENT) {
    const target_card = state.find(el => el.id === action.payload);
    if (target_card.count === 1) {
      state = state.filter(el => el.id !== action.payload)
    } else {
      target_card.count--
    }
    return [...state]
  } else {
    return state
  }
}
