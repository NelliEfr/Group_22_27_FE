import React from 'react'
import s from './index.module.css'

export default function Product({ title, description, price }) {
  return (
    <div className={s.product_card}>
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }$</p>
    </div>
  )
}
