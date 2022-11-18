import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to='/users_page'>Users</Link>
      <Link to='/posts_page'>Posts</Link>
    </div>
  )
}
