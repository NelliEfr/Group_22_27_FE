import React, { useContext } from 'react'
import { Context } from '../../context'
import User from '../User';
import s from './index.module.css'

export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div className={s.users_container}>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
}
