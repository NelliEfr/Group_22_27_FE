import React from 'react'

export default function ServiceCard({ title, img }) {

  const card_style = {
    backgroundImage: `url(${img})`
  }

  return (
    <div style={card_style}>
      { title }
    </div>
  )
}
