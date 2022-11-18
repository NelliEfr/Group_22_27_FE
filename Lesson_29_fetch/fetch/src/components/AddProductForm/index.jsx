import React, { useContext } from 'react'
import { addProduct } from '../../requests/products';
import s from './index.module.css'
import { Context } from '../../context';

export default function AddProductForm() {

  const { createProduct } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { title, description, price } = event.target;

    addProduct({
      title: title.value,
      description: description.value,
      price: price.value
    }, createProduct);
  
    title.value = '';
    description.value = '';
    price.value = '';
  }

  return (
    <form className={s.add_product_form} onSubmit={submit}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='description' placeholder='Description' />
      <input type='text' name='price' placeholder='Price' />
      <button>Add product</button>
    </form>
  )
}
