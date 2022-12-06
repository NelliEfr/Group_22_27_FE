import React from 'react'
import s from './index.module.css'
import { addPost } from '../../store/reducer/postsReducer'
import { useDispatch } from 'react-redux'

export default function AddPostForm() {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { title, text } = event.target;
    dispatch(addPost({
      title: title.value,
      text: text.value
    }));
    title.value = '';
    text.value = '';
  }

  return (
    <form className={s.post_form} onSubmit={submit}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='text' placeholder='Text' />
      <button>Add post</button>
    </form>
  )
}
