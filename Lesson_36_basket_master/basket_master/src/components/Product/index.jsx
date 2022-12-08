import React from 'react'
import s from './index.module.css'
import { addToBasket } from '../../store/reducer/basketReducer'
import { useDispatch } from 'react-redux'

export default function Product({ id, title, price}) {

  const dispatch = useDispatch();

  const add_to_basket = () => dispatch(addToBasket({ id, title, price }));

  return (
    <div className={s.product_item}>
      <p>{ title }</p>
      <p>{ price }</p>
      <button onClick={add_to_basket}>Add to basket</button>
    </div>
  )
}
