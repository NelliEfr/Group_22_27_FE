import React from 'react'
import Button from '../Button'
import s from './index.module.css'
import logo from '../../media/logo_pic.png'
import { GlobalOutlined } from '@ant-design/icons'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <nav>
          <ul>
            <li>Products</li>
            <li>Resources</li>
            <li>Inspiration</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <img src={logo} alt='logo' />
        <div className={s.info_block}>
          <p>Sales: <br/> +1 (800) 315-5939</p>
          <GlobalOutlined className={s.globe_icon} />
          <p className={s.search_btn}>Search</p>
          <p>Login</p>
          <Button />
        </div>
      </div>
    </header>
  )
}
