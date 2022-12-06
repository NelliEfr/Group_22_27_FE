import { createStore, combineReducers } from 'redux'
import { postsReducer } from './reducer/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export const store = createStore(rootReducer);
