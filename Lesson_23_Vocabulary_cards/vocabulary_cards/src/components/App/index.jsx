import { words } from '../../data/words'
import CardsContainer from '../CardsContainer'
import Triggers from '../Triggers';
import { useState } from 'react'
import Form from '../Form';

function App() {
  const [ cards, setCards ] = useState(words)

  const change_to_rus = () => {
    setCards(
      cards.map(el => {
        el.lang = 'rus';
        return el
      })
    )
  }

  const change_to_eng = () => {
    setCards(
      cards.map(el => {
        el.lang = 'eng';
        return el
      })
    )
  }

  return (
    <div>
      <Form />
      <CardsContainer cards={cards} />
      <Triggers change_to_rus={change_to_rus} change_to_eng={change_to_eng} />
    </div>
  );
}

export default App;
