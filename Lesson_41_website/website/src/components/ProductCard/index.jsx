import React from 'react'
import s from './index.module.css'

export default function ProductCard({ id, title, description, img, color }) {

  return (
    <div>
      <div className={[s.img_block, s[color]].join(' ')}>
        <img src={img} alt="product_img" />
        <p className={s.title}>{title}</p>
        <button>ADD TO CART</button>
      </div>
      <div className={[s.descr_block, s[color]].join(' ')}>
        <p>{description}</p>
        <button>Learn more</button>
      </div>
    </div>
  )
}
