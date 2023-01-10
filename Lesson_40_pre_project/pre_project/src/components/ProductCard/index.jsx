import React from 'react'
import s from './index.module.css'

export default function ProductCard({ title, image }) {
  return (
    <div className={s.product_card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <button>Add to cart</button>
    </div>
  )
}
