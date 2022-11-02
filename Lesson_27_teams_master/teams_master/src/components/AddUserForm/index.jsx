import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'

export default function AddUserForm() {

  const { teams } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { user_name } = event.target;
    console.log(user_name.value);
    user_name.value = '';
  }

  return (
    <div className={s.user_form_container}>
      Add user
      <form onSubmit={submit} className={s.user_form}>
        <input type='text' name='user_name' placeholder="User's name" />
        <Select options={teams} />
        <button>Add user</button>
      </form>
    </div>
  )
}
