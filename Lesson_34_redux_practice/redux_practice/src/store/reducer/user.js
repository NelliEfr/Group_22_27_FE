const defaultState = [];

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';

export const addUser = (payload) => ({ type: ADD_USER, payload})
export const deleteUser = (payload) => ({ type: DELETE_USER, payload})

export const userReducer = (state = defaultState, action) => {
  if (action.type === ADD_USER){
    return [...state, {
      id: Date.now(),
      ...action.payload
    }]
  } else if (action.type === DELETE_USER) {
    return state.filter(el => el.id !== action.payload)
  } else {
    return state
  }
}
