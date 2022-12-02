const defaultState = [];

const ADD_CARD = 'ADD_CARD';
const CHANGE_CARD = 'CHANGE_CARD';
const DELETE_CARD = 'DELETE_CARD';

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const changeCard = (payload) => ({ type: CHANGE_CARD, payload });
export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });

export const languageCardReducer = (state = defaultState, action) => {
  if(action.type === ADD_CARD){
    return [...state, {
      id: Date.now(),
      lang: 'rus',
      ...action.payload
    }]
  } else if (action.type === CHANGE_CARD) {
    return state.map(el => {
      if(el.id === action.payload){
        el.lang = el.lang === 'rus' ? 'eng' : 'rus'
      }
      return el
    })
  } else if (action.type === DELETE_CARD) {
    return state.filter(el => el.id !== action.payload)
  } else {
    return state
  }
}
