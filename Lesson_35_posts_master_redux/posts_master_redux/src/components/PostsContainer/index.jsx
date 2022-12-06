import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../Post';
import { changeLike } from '../../store/reducer/postsReducer';

export default function PostsContainer() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.posts);

  const change_like = id => dispatch(changeLike(id));

  return (
    <div>
      {
        state.map(el => <Post key={el.id} {...el} change_like={change_like} />)
      }
    </div>
  )
}
