import React from 'react'

export default function ToDoItem({ title, done }) {
  const done_style = {
    color: 'gray',
    textDecoration: 'line-through'
  }

  const not_done_style = {
    color: 'red'
  }

  return (
    <div style={ done ? done_style : not_done_style }>
      {title}
    </div>
  )
}
