import React from 'react'
import s from './index.module.css'

export default function AddProductForm() {
  return (
    <form className={s.add_product_form}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='description' placeholder='Description' />
      <input type='text' name='price' placeholder='Price' />
      <button>Add product</button>
    </form>
  )
}
