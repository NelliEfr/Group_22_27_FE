import React from 'react'
import Post from '../Post'

export default function PostsContainer({ posts }) {
  return (
    <div>
      {
        posts.map(el => <Post key={el.id} {...el} />)
      }
    </div>
  )
}
