import React from 'react'
import CommentsContainer from '../CommentsContainer';
import s from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'

export default function Post({ id, title, text, like, comments, change_like, add_comment, delete_post }) {

  const like_classes = [s.like_btn, like ? s.like_btn_active : ''].join(' ');

  return (
    <div className={s.post_item}>
      <CloseOutlined className={s.cross_icon} onClick={() => delete_post(id)} />
      <h2>{ title }</h2>
      <p>{ text }</p>
      <p className={like_classes} onClick={() => change_like(id)}>
        { like ? 'Liked' : 'Like?' }
      </p>
      <CommentsContainer comments={comments} add_comment={add_comment} id={id} />
    </div>
  )
}
