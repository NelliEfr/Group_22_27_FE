import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function FormItem({ title, button, info_text, form_type, info_text_add, redirect_btn_link }) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => console.log(data);

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegister = register('email', {
    required: '* Enter your email',
    pattern: {
      value: emailRegex,
      message: '* Not valid email format'
    }
  });

  const passwordRegister = register('password', {
    required: '* Enter your password',
    pattern: {
      value: passwordRegex,
      message: '* Your password should have minimum eight characters, at least one letter, one number and one special character'
    }
  });

  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>

      <p className={s.form_title}>{ title }</p>

      <p className={s.info_text}>{ info_text_add }</p>

      <FormInput type='text' name='email' placeholder='Email' {...emailRegister} />

      <div>
        {errors.email && <p className={s.error_message}>{errors.email?.message}</p>}
      </div>

      {
        ['registration', 'login'].includes(form_type)
        ? <FormInput type='password' name='password' placeholder='Password' {...passwordRegister} />
        : ''
      }

      <div>
        {errors.password && <p className={s.error_message}>{errors.password?.message}</p>}
      </div>

      {
        ['registration', 'reset_password'].includes(form_type)
        ? <p className={s.info_text}>{ info_text }</p>
        : <Link to='/reset_password_form' style={{ textDecoration: 'none' }}>
            <p className={s.info_text}>{ info_text }</p>
          </Link>
      }
      

      <FormButton color='yellow'>{ button.submit }</FormButton>

      {
        ['registration', 'login'].includes(form_type)
        ? <Link to={redirect_btn_link} style={{ textDecoration: 'none' }}>
            <FormButton color='white'>{ button.redirect }</FormButton>
          </Link>
        : ''
      }

    </form>
  )
}
