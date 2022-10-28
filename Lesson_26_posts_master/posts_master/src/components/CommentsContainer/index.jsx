import React from 'react'
import Comment from '../Comment'

export default function CommentsContainer({ comments }) {
  return (
    <div>
      {
        comments.map(el => <Comment key={el.id} {...el} />)
      }
    </div>
  )
}
