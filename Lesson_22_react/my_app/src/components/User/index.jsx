import React from 'react'
import s from './index.module.css'

function User({id, firstname, lastname, active, avatar}) {
  
  const status = active ? 'active' : 'not active';
  const backgroundColor = active ? 'lightgreen' : 'lightgray';
  const img_url = avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

  const card_style = {
    backgroundColor: backgroundColor
  }

  return (
    <div style={card_style} className={s.card}>
      <p>{id}</p>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{status}</p>
      <img src={img_url} alt='#' className={s.avatar} />
    </div>
  )
}

export default User
