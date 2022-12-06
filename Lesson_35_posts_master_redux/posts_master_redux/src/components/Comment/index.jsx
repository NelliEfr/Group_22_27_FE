import React from 'react'
import s from './index.module.css'

export default function Comment({ id, text, delete_comment, post_id }) {
  return (
    <div className={s.comment_item} onClick={() => delete_comment({ post_id: post_id, comment_id: id})}>
      { text }
    </div>
  )
}
