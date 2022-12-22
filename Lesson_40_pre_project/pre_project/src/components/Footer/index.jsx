import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={s.footer_section}>
      <div className={['wrapper', s.footer_block].join(' ')}>
        <p>My first web-site (c)</p>
        <p>2022</p>
      </div>
    </footer>
  )
}
