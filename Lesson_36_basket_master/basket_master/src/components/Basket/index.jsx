import React from 'react'
import { useSelector } from 'react-redux'
import BasketCard from '../BasketCard'

export default function Basket() {

  const state = useSelector(state => state.basket);

  return (
    <div>
      {
        state.map(el => <BasketCard key={el.id} {...el} />)
      }
    </div>
  )
}
