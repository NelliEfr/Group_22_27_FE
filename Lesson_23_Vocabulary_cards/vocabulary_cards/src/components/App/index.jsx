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

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'rus' ? 'eng' : 'rus'
      }
      return el
    }))
  }

  const add_card = (eng, rus) => setCards([
    ...cards,
    {
      id: Date.now(),
      eng,
      rus,
      lang: 'eng'
    }
  ]);

  return (
    <div>
      <Form add_card={add_card} />
      <CardsContainer cards={cards} change_lang={change_lang} />
      <Triggers change_to_rus={change_to_rus} change_to_eng={change_to_eng} />
    </div>
  );
}

export default App;
