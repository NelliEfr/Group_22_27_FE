import React from 'react'
import s from './index.module.css'

export default function CardItem({ id, eng, rus, lang, change_lang }) {
  const text = lang === 'rus' ? rus : eng;

  const card_style = {
    color: lang === 'eng' ? 'white' : '#2980b9',
    backgroundColor: lang === 'eng' ? '#2980b9' : 'white'
  }

  return (
    <div className={s.card} style={card_style} onClick={() => change_lang(id)}>
      {text}
    </div>
  )
}
