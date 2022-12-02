import React from 'react'

export default function User({ id, name, age, country, removeUser }) {
  return (
    <div onClick={() => removeUser(id)}>
      <p>Name: { name }</p>
      <p>Age: { age }</p>
      <p>Country: { country }</p>
    </div>
  )
}
