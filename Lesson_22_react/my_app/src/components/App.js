import User from './User';
import { users } from '../data/users'

function App() {
  const active_users = users.filter(el => el.active);

  return (
    <div className="App">
      {
        // users.map(el => <User key={el.id} firstname={el.firstname} lastname={el.lastname} />)
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  );
}

export default App;
