import Worker from "../Worker";
import { workers } from '../../data/workers'

function App() {

  const active_workers = workers.filter(el => el.in_office);

  return (
    <div>
      {
        active_workers.map(el => <Worker key={el.id} {...el} />)
      }
    </div>
  );
}

export default App;
