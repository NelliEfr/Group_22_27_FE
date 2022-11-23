import React, { useContext } from 'react'
import Vegetable from '../Vegetable';
import { Context } from '../../context';

export default function VegetablesContainer() {
  
  const { vegCards } = useContext(Context);

  return (
    <div>
      {
        vegCards
          .sort((a, b) => a.price - b.price)
          .map(el => <Vegetable key={el.id} {...el} />)
      }
    </div>
  )
}
