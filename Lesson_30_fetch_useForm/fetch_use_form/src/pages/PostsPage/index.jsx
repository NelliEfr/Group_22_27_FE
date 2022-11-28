import React from 'react'
import AddPostForm from '../../components/AddPostForm'
import PostsContainer from '../../components/PostsContainer'

export default function PostsPage() {
  return (
    <div>
      <AddPostForm />
      <PostsContainer />
    </div>
  )
}
