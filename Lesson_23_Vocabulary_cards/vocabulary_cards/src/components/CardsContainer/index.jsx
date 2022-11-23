import React, { useContext } from 'react'
import CardItem from '../CardItem'
import s from './index.module.css'
import { Context } from '../../context'

export default function CardsContainer() {

  const {cards} = useContext(Context);

  return (
    <div className={s.cards_container}>
      {
        cards.map(card => <CardItem key={card.id} {...card} />)
      }
    </div>
  )
}
