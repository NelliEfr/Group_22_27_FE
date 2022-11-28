import React from 'react'
import AddToDoForm from '../../components/AddToDoForm'
import ToDosContainer from '../../components/ToDoContainer'

export default function ToDosPage() {
  return (
    <div>
      <AddToDoForm />
      <ToDosContainer />
    </div>
  )
}
