import React from 'react'

export default function LanguageCard({ id, rus, eng, lang, change, remove }) {

  const text = lang === 'rus' ? rus : eng;

  return (
    <div onClick={() => change(id)} onDoubleClick={() => remove(id)}>
      { text }
    </div>
  )
}
