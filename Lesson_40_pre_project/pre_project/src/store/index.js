import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';

const rootReducer = combineReducers({
  category: categoriesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
