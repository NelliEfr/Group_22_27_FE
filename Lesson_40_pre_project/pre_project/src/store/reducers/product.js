const defaultState = {};

const LOAD_PRODUCT = 'LOAD_PRODUCT';

export const loadProduct = payload => ({ type: LOAD_PRODUCT, payload });

export const productReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCT){
    return action.payload
  } else {
    return state
  }
}
