import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_req'
import { useSelector, useDispatch } from 'react-redux'
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css'

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);

  useEffect(() => {
    dispatch(load_categories)
  }, []);

  return (
    <div className={s.categories_block}>
      <h1>The best store of the best things</h1>
      <div className={s.categories_section}>
        {
          categories.map(el => <CategoryCard key={el} category={el} />)
        }
      </div>
    </div>
  )
}
