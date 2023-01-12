import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, image }) {

  const product_url = `/product/${id}`

  return (
    <div className={s.product_card}>
      <Link to={product_url}>
        <img src={image} alt={title} />
        <p>{ title }</p>
      </Link>
      <button>Add to cart</button>
    </div>
  )
}
