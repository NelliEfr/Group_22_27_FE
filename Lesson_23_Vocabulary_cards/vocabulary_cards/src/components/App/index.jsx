import { words } from '../../data/words'
import CardsContainer from '../CardsContainer'
import Triggers from '../Triggers';

function App() {
  return (
    <div>
      <CardsContainer cards={words} />
      <Triggers />
    </div>
  );
}

export default App;
