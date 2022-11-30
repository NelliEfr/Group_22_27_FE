import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Comment({ id, text, post_id }) {

  const { delete_comment } = useContext(Context);

  return (
    <p className={s.comment_item} onClick={() => delete_comment(post_id, id)}>
      { text }
    </p>
  )
}
