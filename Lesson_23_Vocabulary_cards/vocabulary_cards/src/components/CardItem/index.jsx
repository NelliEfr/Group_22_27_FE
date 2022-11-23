import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function CardItem({ id, eng, rus, lang }) {

  const { change_lang, delete_card } = useContext(Context);

  const text = lang === 'rus' ? rus : eng;

  const card_style = {
    color: lang === 'eng' ? 'white' : '#2980b9',
    backgroundColor: lang === 'eng' ? '#2980b9' : 'white'
  }

  return (
    <div 
      className={s.card} 
      style={card_style} 
      onClick={() => change_lang(id)}
      onDoubleClick={() => delete_card(id)}
    >
      {text}
    </div>
  )
}
