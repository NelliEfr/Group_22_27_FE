import { words } from '../../data/words'
import CardsContainer from '../CardsContainer'
import Triggers from '../Triggers';
import { useState, useEffect } from 'react'
import Form from '../Form';
import { Context } from '../../context'

function App() {
  const [ cards, setCards ] = useState(words);

  useEffect(() => {
    const raw = localStorage.getItem('cards') || []
    setCards(JSON.parse(raw))
  }, []); // стейт отслеживать не нужно

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]); // второй аргумент - отслеживание изменения стейта

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

  const delete_card = (id) => setCards(cards.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ cards, add_card, change_lang, change_to_rus, change_to_eng, delete_card }}>
        <Form />
        <CardsContainer />
        <Triggers />
      </Context.Provider>
    </div>
  );
}

export default App;
