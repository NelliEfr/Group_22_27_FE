import React from 'react'
import Post from '../Post'

export default function PostsContainer({ posts, change_like }) {
  return (
    <div>
      {
        posts.map(el => <Post key={el.id} {...el} change_like={change_like} />)
      }
    </div>
  )
}
