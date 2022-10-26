import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './index.module.css'
import { MenuOutlined } from '@ant-design/icons'
import Button from '../Button'

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
      <Button type='light_mode'>Связаться</Button>
      <MenuOutlined className={s.menu_icon}/>
    </nav>
  )
}
