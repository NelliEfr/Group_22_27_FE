import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducer/productReducer';
import { languageCardReducer } from './reducer/languageCardReducer';

const rootReducer = combineReducers({
  products: productReducer,
  languageCards: languageCardReducer
});

export const store = createStore(rootReducer);
