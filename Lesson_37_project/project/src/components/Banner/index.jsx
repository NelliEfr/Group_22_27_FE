import React from 'react'
import banner from '../../media/banner.png'
import s from './index.module.css'

export default function Banner() {
  return (
    <div className={s.banner_section}>
      <div className={s.banner_sub_section}>
        <div>
          <p>Распродажа</p>
          <p>в честь нового сезона</p>
          <div>
            <div>Все акции</div>
            <div>Подробнее</div>
          </div>
        </div>
        <img src={banner} alt="banner_img" />
      </div>
    </div>
  )
}
