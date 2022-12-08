import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducer/productReducer";
import { basketReducer } from "./reducer/basketReducer";

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer
});

export const store = createStore(rootReducer);
