import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../Post';
import { changeLike, deletePost } from '../../store/reducer/postsReducer';

export default function PostsContainer() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.posts);

  const change_like = id => dispatch(changeLike(id));
  const delete_post = id => dispatch(deletePost(id));
  // const delete_comment = ids => dispatch(deleteComment(ids));

  return (
    <div>
      {
        state.map(el => <Post key={el.id} {...el} change_like={change_like} delete_post={delete_post} />)
      }
    </div>
  )
}
