import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({ tasks }) {
  return (
    <div>
      Tasks:
      {
        tasks 
        ? tasks.map(el => <ToDoItem key={el.id} {...el} />)
        : ' No tasks'
      }
    </div>
  )
}
