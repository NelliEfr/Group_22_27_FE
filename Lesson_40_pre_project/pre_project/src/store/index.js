import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productReducer } from './reducers/product';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
  product: productReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
