import React from 'react'
import s from './index.module.css'

export default function Post({ id, title, text, like, change_like }) {

  const like_styles = [s.like_btn, like ? s.like_btn_active : ''].join(' ');

  return (
    <div className={s.post_item}>
      <h2>{ title }</h2>
      <p>{ text }</p>
      <p className={like_styles} onClick={() => change_like(id)}>
        { like ? 'Liked' : 'Like?' }
      </p>
    </div>
  )
}
