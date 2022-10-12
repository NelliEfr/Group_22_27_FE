import React from 'react'
import CardItem from '../CardItem'
import s from './index.module.css'

export default function CardsContainer({ cards, change_lang }) {
  return (
    <div className={s.cards_container}>
      {
        cards.map(card => <CardItem key={card.id} {...card} change_lang={change_lang} />)
      }
    </div>
  )
}
