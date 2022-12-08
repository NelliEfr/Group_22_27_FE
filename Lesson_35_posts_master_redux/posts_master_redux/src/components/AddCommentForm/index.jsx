import React from 'react'
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/reducer/postsReducer';

export default function AddCommentForm({ post_id }) {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { text } = event.target;
    dispatch(addComment({
      comment: { text: text.value },
      post_id
    }));
    text.value = '';
  }

  return (
    <form onSubmit={submit}>
      <input type='text' name='text' placeholder='Comment' />
      <button>Add comment</button>
    </form>
  )
}
