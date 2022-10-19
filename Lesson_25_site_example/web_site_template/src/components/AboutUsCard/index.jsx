import React from 'react'
import s from './index.module.css'

export default function AboutUsCard({ value, title, link_title, link_url }) {
  return (
    <div className={s.about_us_card_item}>
      <p className={s.value}>{ value }</p>
      <p className={s.title}>{ title }</p>
      <a href={link_url}>{ link_title }</a>
    </div>
  )
}
