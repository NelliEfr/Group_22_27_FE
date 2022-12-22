const defaultState = [];

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = payload => ({ type: LOAD_CATEGORIES, payload });

export const categoriesReducer = (state = defaultState, action) => {
  if(action.type === LOAD_CATEGORIES) {
    return action.payload
  } else {
    return state
  }
}
