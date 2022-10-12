import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './index.module.css'

export default function Navbar() {
  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
      <a href='#'>
        <img src={logo} alt='logo' />
      </a>
      <ul className={s.nav_menu}>
        <li>Главная</li>
        <li>Услуги</li>
        <li>Кейсы</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>
    </nav>
  )
}
