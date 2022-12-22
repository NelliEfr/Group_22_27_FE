import React from 'react'
import s from './index.module.css'

export default function CategoryCard({ category }) {
  return (
    <div className={s.category_card}>
      { category }
    </div>
  )
}
