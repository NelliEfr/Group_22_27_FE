import React from 'react'
import s from './index.module.css'

export default function AddPostForm() {
  return (
    <form className={s.post_form}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='text' placeholder='Your text' />
      <button>Add post</button>
    </form>
  )
}
