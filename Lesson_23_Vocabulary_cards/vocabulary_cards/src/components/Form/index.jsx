import React from 'react'
import s from './index.module.css'

export default function Form() {
  return (
    <div className={s.form}>
      <input type='text' placeholder='Russian' name='rus' />
      <input type='text' placeholder='English' name='eng' />
      <button>Add</button>
    </div>
  )
}
