import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'
import { Context } from '../../context'
import { addUser } from '../../requests/users'

export default function AddUserForm() {

  const { createNewUser } = useContext(Context);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const firstnameRegister = register('firstName', {
    required: '* Field "firstname" is required'
  });

  const lastnameRegister = register('lastName', {
    required: '* Field "lastname" is required'
  });

  const ageRegister = register('age', {
    required: '* Field "age" is required'
  });

  const submit = data => addUser(data, createNewUser);

  return (
    <div className={s.add_user_form}>
      <form onSubmit={handleSubmit(submit)}>
        <input 
          type='text' 
          name='firstName' 
          placeholder='First name' 
          {...firstnameRegister}
        />

        <input 
          type='text' 
          name='lastName' 
          placeholder='Last name' 
          {...lastnameRegister}
        />

        <input 
          type='text' 
          name='age' 
          placeholder='Age' 
          {...ageRegister}
        />

        <button>Add user</button>
      </form>

      <div>
        <div>
          {errors.firstName && <p>{errors.firstName?.message}</p>}
        </div>

        <div>
          {errors.lastName && <p>{errors.lastName?.message}</p>}
        </div>

        <div>
          {errors.age && <p>{errors.age?.message}</p>}
        </div>
      </div>
    </div>
  )
}
