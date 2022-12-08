import React from 'react'
import s from './index.module.css'

export default function BasketCard({ id, title, price, count }) {
  return (
    <div className={s.basket_card}>
      <p>{ title }</p>
      <p>{ price }</p>
      <p>{ count }</p>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  )
}
