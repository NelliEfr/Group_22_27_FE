import { words } from '../../data/words'
import CardsContainer from '../CardsContainer'

function App() {
  return (
    <div>
      <CardsContainer cards={words} />
    </div>
  );
}

export default App;
