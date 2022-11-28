import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'
import { Context } from '../../context';
import { addPost } from '../../requests/posts';

export default function AddPostForm() {

  const { createNewPost } = useContext(Context);

  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onBlur'
  });

  const submit = data => addPost(data, createNewPost);

  const userIdRegister = register('userId', {
    required: '*The field "title" is required'
  });

  const titleRegister = register('title', {
    required: '*The field "title" is required'
  });
  
  const bodyRegister = register('body', {
    required: '*The field "body" is required'
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className={s.add_post_form}>
        <input type='text' name='title' placeholder='Title' {...titleRegister} />
        <input type='text' name='body' placeholder='Body' {...bodyRegister} />
        <input type='text' name='userId' placeholder='User ID' {...userIdRegister} />
        <button>Add post</button>
      </form>

      <div>
        <div>
          {errors.title && <p>{errors.title?.message}</p>}
        </div>
        <div>
          {errors.body && <p>{errors.body?.message}</p>}
        </div>
      </div>
    </div>
  )
}
