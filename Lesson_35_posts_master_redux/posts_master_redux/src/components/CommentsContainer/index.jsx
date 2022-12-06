import React from 'react'
import Comment from '../Comment'
import { deleteComment } from '../../store/reducer/postsReducer'
import { useDispatch } from 'react-redux'

export default function CommentsContainer({ comments, post_id }) {

  const dispatch = useDispatch();

  const delete_comment = ids => dispatch(deleteComment(ids))

  return (
    <div>
      {
        comments.map(el => <Comment key={el.id} {...el} delete_comment={delete_comment} post_id={post_id} />)
      }
    </div>
  )
}
