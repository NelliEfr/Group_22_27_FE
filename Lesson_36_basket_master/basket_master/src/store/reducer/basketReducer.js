const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addToBasket = payload => ({ type: ADD_TO_BASKET, payload });

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
  } else {
    return state
  }
}
