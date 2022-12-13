import React from 'react'
import { useSelector } from 'react-redux'
import BasketCard from '../BasketCard'
import { clearBasket } from '../../store/reducer/basketReducer';
import { useDispatch } from 'react-redux';

export default function Basket() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.basket);

  const clear_basket = () => dispatch(clearBasket());

  return (
    <div>
      {
        state.length !== 0
        ? <div>
            <p>Basket:</p>
            <div>
              {state.map(el => <BasketCard key={el.id} {...el} />)}
            </div>
            <button onClick={clear_basket}>Clear basket</button>
          </div>
        : ''
      }     
    </div>
  )
}
