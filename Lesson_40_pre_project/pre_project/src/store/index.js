import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
