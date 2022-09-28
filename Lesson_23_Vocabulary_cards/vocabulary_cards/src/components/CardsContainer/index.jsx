import React from 'react'
import CardItem from '../CardItem'
import s from './index.module.css'

export default function CardsContainer({cards}) {
  return (
    <div className={s.cards_container}>
      {
        cards.map(card => <CardItem key={card.id} {...card} />)
      }
    </div>
  )
}
