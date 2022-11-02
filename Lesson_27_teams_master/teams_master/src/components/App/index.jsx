import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../context'

function App() {

  const [ teams, setTeams ] = useState([]);

  const add_team = (value) => {
    setTeams([...teams, { value, label: value }])
  }

  return (
    <div>
      <Context.Provider value={{ add_team, teams }}>
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
