import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, image}) {

  const link = `/product/${id}`;

  return (
    <Link className={s.product_card} to={link}>
      <img alt={title} src={image} />
      <p>{ title }</p>
    </Link>
  )
}
