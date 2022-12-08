const defaultState = [];

const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = payload => ({ type: ADD_PRODUCT, payload });

export const productReducer = (state = defaultState, action) => {
  if (action.type === ADD_PRODUCT) {
    return [...state, {
      id: Date.now(),
      ...action.payload
    }]
  } else {
    return state
  }
}
