import React from 'react'
import s from './index.module.css'
import { cartIncrement, cartDecrement } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export default function CartCard({ id, title, price, image, count }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));

  console.log(count);

  return (
    <div className={s.cart_card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ price } X {count} = {price * count}</p>
      <div className={s.triggers}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}
