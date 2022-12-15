import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/categories'>Categories</Link>
    </div>
  )
}
