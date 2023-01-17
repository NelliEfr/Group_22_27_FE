import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css'

export default function CartPage() {

  const cart = useSelector(state => state.cart);

  return (
    <div className={s.cart_container}>
      {
        cart.map(el => <CartCard key={el.id} {...el} />)
      }
    </div>
  )
}
