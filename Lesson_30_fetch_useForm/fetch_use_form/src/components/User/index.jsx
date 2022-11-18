import React from 'react'
import s from './index.module.css'

export default function User({ firstName, lastName, age }) {
  return (
    <div className={s.user_card}>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  )
}
