import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'

export default function FormItem({ title, button, info_text, form_type, info_text_add }) {
  return (
    <form className={s.form_item}>

      <p className={s.form_title}>{ title }</p>

      <p className={s.info_text}>{ info_text_add }</p>

      <FormInput type='text' name='email' placeholder='Email' />


      {
        ['registration', 'login'].includes(form_type)
        ? <FormInput type='password' name='password' placeholder='Password' />
        : ''
      }


      <p className={s.info_text}>{ info_text }</p>

      <FormButton color='yellow'>{ button.submit }</FormButton>

      {
        ['registration', 'login'].includes(form_type)
        ? <FormButton color='white'>{ button.redirect }</FormButton>
        : ''
      }

    </form>
  )
}
