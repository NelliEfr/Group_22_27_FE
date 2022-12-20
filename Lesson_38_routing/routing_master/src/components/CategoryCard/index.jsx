import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  const link = `/categories/${category}`
  
  return (
    <Link to={link}>
      <div className={s.category_card}>
        { category }
      </div>
    </Link>
  )
}
