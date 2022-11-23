import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Vegetable({ id, title, price, country }) {

  const { delete_veg } = useContext(Context);

  return (
    <div className={s.vegetable_card} onClick={() => delete_veg(id)}>
    <p>Title: {title}</p>
    <p>Price: {price}</p>
    <p>Country: {country}</p>
  </div>
  )
}
