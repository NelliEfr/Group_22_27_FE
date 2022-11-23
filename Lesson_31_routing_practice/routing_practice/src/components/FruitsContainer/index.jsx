import React, { useContext } from 'react'
import { Context } from '../../context'
import Fruit from '../Fruit';

export default function FruitsContainer() {

  const { frutCards } = useContext(Context);

  return (
    <div>
      {
        frutCards
          .sort((a, b) => a.price - b.price)
          .map(el => <Fruit key={el.id} {...el} />)
      }
    </div>
  )
}
