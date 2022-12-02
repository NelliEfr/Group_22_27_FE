import React from 'react'
import { addCard, changeCard, deleteCard } from '../../store/reducer/languageCardReducer';
import { useDispatch, useSelector } from 'react-redux';
import LanguageCard from '../LanguageCard';

export default function LanguageCards() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.languageCards);

  const submit = event => {
    event.preventDefault();
    const { rus, eng } = event.target;
    dispatch(addCard({
      rus: rus.value,
      eng: eng.value
    }));
    rus.value = '';
    eng.value = '';
  }

  const change = id => dispatch(changeCard(id));
  const remove = id => dispatch(deleteCard(id));

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' name='rus' placeholder='RUS' />
        <input type='text' name='eng' placeholder='ENG' />
        <button>Add card</button>
      </form>

      <div>
        {
          state.map(el => <LanguageCard key={el.id} {...el} change={change} remove={remove} />)
        }
      </div>
    </div>
  )
}
