import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from '../../context'

function App() {

  const [ teams, setTeams ] = useState([]);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const teams = JSON.parse(localStorage.getItem('teams'));
    const users = JSON.parse(localStorage.getItem('users'));
    setTeams(teams);
    setUsers(users);
  }, []);

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
    localStorage.setItem('users', JSON.stringify(users));
  }, [teams, users]);

  const add_team = (value) => {
    setTeams([...teams, { value, label: value }])
  }

  const add_user = (name, team) => {
    setUsers([...users, {
      id: Date.now(),
      name,
      team
    }])
  }

  return (
    <div>
      <Context.Provider value={{ add_team, teams, users, add_user }}>
        <Nav />
        <Routes>
          <Route path='/configurations_page' element={<ConfigurationsPage />} />
          <Route path='/teams_page' element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
