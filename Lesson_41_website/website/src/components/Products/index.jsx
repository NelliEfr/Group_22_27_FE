import React from 'react'
import s from './index.module.css'
import { products } from '../../data/products'
import ProductCard from '../ProductCard'

export default function Products() {
  return (
    <div className={s.products_card_container}>
      {
        products.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
