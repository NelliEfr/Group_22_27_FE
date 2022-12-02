import React from 'react'
import { addUser, deleteUser } from '../../store/reducer/user';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User';

export default function UsersPage() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.users);

  const submit = event => {
    event.preventDefault();
    const { name, age, country } = event.target;
    dispatch(addUser({
      name: name.value,
      age: age.value,
      country: country.value
    }));
    name.value = '';
    age.value = '';
    country.value = '';
  }

  const removeUser = id => dispatch(deleteUser(id));

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' name='name' placeholder='Name' />
        <input type='text' name='age' placeholder='Age' />
        <input type='text' name='country' placeholder='Country' />
        <button>Add user</button>
      </form>

      <div>
        {
          state.map(el => <User key={el.id} {...el} removeUser={removeUser} />)
        }
      </div>
    </div>
  )
}
