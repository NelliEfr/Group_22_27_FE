import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducer/user';

const rootReducer = combineReducers({
  users: userReducer
});

export const store = createStore(rootReducer);
