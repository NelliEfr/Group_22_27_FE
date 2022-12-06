import { posts } from "../../data/posts"
const defaultState = posts;

const CHANGE_LIKE = 'CHANGE_LIKE';
const ADD_POST = 'ADD_POST';

export const changeLike = payload => ({ type: CHANGE_LIKE, payload });
export const addPost = payload => ({ type: ADD_POST, payload });



export const postsReducer = (state = defaultState, action) => {
  if(action.type === CHANGE_LIKE) {
    const target_post = state.find(el => el.id === action.payload);
    target_post.like = !target_post.like
    return [...state]
  } else if (action.type === ADD_POST) {
    return [...state, {
      id: Date.now(),
      like: false,
      comments: [],
      ...action.payload
    }]
  } else {
    return state
  }
}

/*
if (action.type === CHANGE_LIKE) {
  return state.map(el => {
      if (el.id === action.payload) {
          el.like = !el.like;
      }
      return el
  })
*/
