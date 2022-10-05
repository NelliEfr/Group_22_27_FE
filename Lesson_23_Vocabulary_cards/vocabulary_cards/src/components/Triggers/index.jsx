import React from 'react'
import s from './index.module.css'

export default function Triggers({ change_to_rus, change_to_eng }) {
  return (
    <div className={s.triggers}>
      <button onClick={change_to_eng}>Eng</button>
      <button onClick={change_to_rus}>Rus</button>
    </div>
  )
}
