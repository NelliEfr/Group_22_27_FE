import React from 'react'
import s from './index.module.css'

export default function Comment({ id, text }) {
  return (
    <p className={s.comment_item}>{ text }</p>
  )
}
