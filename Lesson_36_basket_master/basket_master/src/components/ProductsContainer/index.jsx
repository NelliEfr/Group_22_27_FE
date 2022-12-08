import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product';

export default function ProductsContainer() {

  const state = useSelector(state => state.products);

  return (
    <div>
      {
        state.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
