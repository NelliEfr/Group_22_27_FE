import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
      <Link to='/vegetables_page'>Vegetables</Link>
      <Link to='/fruits_page'>Fruits</Link>
    </div>
  )
}
