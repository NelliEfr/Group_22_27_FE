import React from 'react'
import s from './index.module.css'
import { aboutUsData } from '../../data/aboutUsData'
import AboutUsCard from '../AboutUsCard'

export default function AboutUs() {
  return (
    <section className={['wrapper', s.about_us_section].join(' ')}>
      
      <div className={s.info_block}>
        <p className='subheader'>О нас</p>
        <h2>Компания <span>ИвановПром</span></h2>
        <p className={s.info_text}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
      </div>
      
      <div className={s.achievements_cards}>
        {
          aboutUsData.map(el => <AboutUsCard key={el.id} {...el} />)
        }
      </div>
    
    </section>
  )
}
