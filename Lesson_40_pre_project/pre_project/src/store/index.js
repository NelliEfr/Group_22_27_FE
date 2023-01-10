import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
