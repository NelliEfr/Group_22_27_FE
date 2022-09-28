import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({ tasks }) {
  return (
    <div>
      <p>Tasks: </p>
      {
        tasks 
        ? tasks.map(task => <ToDoItem key={task.id} {...task} />)
        : <p>Дел нет</p>
      }
    </div>
  )
}
