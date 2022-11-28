import React, { useContext } from 'react'
import { Context } from '../../context'
import ToDoItem from '../ToDoItem';
import s from './index.module.css'

export default function ToDosContainer() {

  const { todos } = useContext(Context);

  return (
    <div className={s.todos_container}>
      {
        todos.map(el => <ToDoItem key={el.id} {...el} />)
      }
    </div>
  )
}
