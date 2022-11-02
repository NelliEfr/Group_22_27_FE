import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddTeamForm() {

  const { add_team } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { team_name } = event.target;
    add_team(team_name.value);
    team_name.value = '';
  }

  return (
    <div className={s.team_form_container}>
      <p>Add team</p>
      <form onSubmit={submit} className={s.team_form}>
        <input type='text' name='team_name' placeholder="Team's name" />
        <button>Add team</button>
      </form>
    </div>
  )
}
