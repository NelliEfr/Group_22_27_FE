import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav}>
      <Link to='/'>Main</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  )
}
