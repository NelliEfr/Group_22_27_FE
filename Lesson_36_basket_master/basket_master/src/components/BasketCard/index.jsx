import React from 'react'
import s from './index.module.css'
import { countIncrement, countDecrement, deleteFromBasket } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'

export default function BasketCard({ id, title, price, count }) {

  const dispatch = useDispatch();

  const increment = () => dispatch(countIncrement(id));
  const decrement = () => dispatch(countDecrement(id));
  const delete_from_basket = () => dispatch(deleteFromBasket(id));

  return (
    <div className={s.basket_card}>
      <p>{ title }</p>
      <p>{ price * count }</p>
      <p>{ count }</p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={delete_from_basket}>X</button>
    </div>
  )
}
