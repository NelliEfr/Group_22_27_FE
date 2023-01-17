import React from 'react'
import s from './index.module.css'

export default function CartCard({ id, title, price, image }) {
  return (
    <div className={s.cart_card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ price }</p>
      <div className={s.triggers}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  )
}
