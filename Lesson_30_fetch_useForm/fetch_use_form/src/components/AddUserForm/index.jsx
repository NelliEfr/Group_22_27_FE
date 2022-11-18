import React from 'react'

export default function AddUserForm() {

  const submit = event => {
    event.preventDefault();
    const { firstname, lastname, age } = event.target;
    console.log(firstname.value, lastname.value, age.value);
    firstname.value = '';
    lastname.value = '';
    age.value = '';
  }

  return (
    <form onSubmit={submit}>
      <input type='text' name='firstname' placeholder='First name' />
      <input type='text' name='lastname' placeholder='Last name' />
      <input type='text' name='age' placeholder='Age' />
      <button>Add user</button>
    </form>
  )
}
