import React from 'react'

export default function Post({ id, title, text, like }) {
  return (
    <div>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </div>
  )
}
