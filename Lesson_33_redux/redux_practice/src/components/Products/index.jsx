import React from 'react'
import { addProduct, deleteProduct } from '../../store/reducer/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';

export default function Products() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.products);

  const submit = event => {
    event.preventDefault();
    const { title, price } = event.target;
    dispatch(addProduct({
      title: title.value,
      price: price.value
    }));
    title.value = '';
    price.value = '';
  }

  const removeProduct = id => dispatch(deleteProduct(id));

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' name='title' placeholder='Title' />
        <input type='text' name='price' placeholder='Price' />
        <button>Add product</button>
      </form>

      <div>
        {
          state.map(el => <Product key={el.id} {...el} removeProduct={removeProduct} />)
        }
      </div>

    </div>
  )
}
