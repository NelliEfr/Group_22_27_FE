import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../context'

function App() {

  const [ teams, setTeams ] = useState([]);
  const [ users, setUsers ] = useState([]);

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
