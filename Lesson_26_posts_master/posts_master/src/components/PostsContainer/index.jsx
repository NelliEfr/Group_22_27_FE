import React from 'react'
import Post from '../Post'

export default function PostsContainer({ posts, change_like, add_comment }) {
  return (
    <div>
      {
        posts.map(el => <Post key={el.id} {...el} change_like={change_like} add_comment={add_comment} />)
      }
    </div>
  )
}
