import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav className={s.nav_section}>
      <div className={['wrapper', s.nav_menu].join(' ')}>
        <Link to='/'>Categories</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </nav>
  )
}
