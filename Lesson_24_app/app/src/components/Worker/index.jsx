import React from 'react'
import ToDoList from '../ToDoList'
import s from './index.module.css'

export default function Worker({ firstname, lastname, position, in_office, avatar, tasks }) {

  const card_style = {
    backgroundColor: in_office ? 'lightgreen' : 'lightgray'
  }

  const img_url = avatar ?? 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'

  return (
    <div style={card_style} className={s.card}>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Position: {position}</p>
      <img src={img_url} alt='#' className={s.avatar} />
      <ToDoList tasks={tasks}/>
    </div>
  )
}
