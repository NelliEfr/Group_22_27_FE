import React from 'react'
import AddCommentForm from '../AddCommentForm'
import Comment from '../Comment'

export default function CommentsContainer({ comments, add_comment, id }) {
  return (
    <div>
      {
        comments.map(el => <Comment key={el.id} {...el} post_id={id}/>)
      }
      <AddCommentForm add_comment={add_comment} id={id} />
    </div>
  )
}
