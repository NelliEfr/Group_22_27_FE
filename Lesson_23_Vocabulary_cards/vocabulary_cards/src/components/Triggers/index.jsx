import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Triggers() {

  const { change_to_eng, change_to_rus } = useContext(Context);
  
  return (
    <div className={s.triggers}>
      <button onClick={change_to_eng}>Eng</button>
      <button onClick={change_to_rus}>Rus</button>
    </div>
  )
}
