import React, { useContext } from 'react'
import User from '../../components/User';
import { Context } from '../../context'

export default function TeamsPage() {

  const { users } = useContext(Context);

  return (
    <div>
      {
        users.length !== 0
        ? users.map(el => <User key={el.id} {...el} />)
        : 'No users'
      }
    </div>
  )
}
