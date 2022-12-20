import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./reducer/products";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  products: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
