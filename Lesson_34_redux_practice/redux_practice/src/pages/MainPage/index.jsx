import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <Link to='/users'>
        <button>UsersPage</button>
      </Link>

      <Link to='/posts'>
        <button>Postspage</button>
      </Link>
    </div>
  )
}
