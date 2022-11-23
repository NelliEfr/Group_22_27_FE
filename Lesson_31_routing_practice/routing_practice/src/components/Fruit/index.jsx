import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Fruit({ id, title, price, country }) {

  const { delete_frut } = useContext(Context);

  return (
    <div className={s.fruit_card} onClick={() => delete_frut(id)}>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Country: {country}</p>
    </div>
  )
}
