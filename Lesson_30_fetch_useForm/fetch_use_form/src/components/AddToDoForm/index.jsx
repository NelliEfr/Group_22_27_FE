import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../context';
import { addToDo } from '../../requests/todos';

export default function AddToDoForm() {

  const { createNewToDo } = useContext(Context);

  const { register, handleSubmit } = useForm();

  const submit = data => addToDo(data, createNewToDo);

  const todoRegister = register('todo');
  const userIdRegister = register('userId');

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' name='todo' placeholder='To do' {...todoRegister} />
        <input type='text' name='userId' placeholder='userId' {...userIdRegister} />
        <button>Add to do</button>
      </form>
    </div>
  )
}
