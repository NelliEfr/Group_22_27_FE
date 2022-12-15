import React, { useState, useEffect } from 'react'
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../requests/categories';

export default function CategoriesPage() {

  const [ categories, setCategories ] = useState([]);

  // useEffect(() => {
  //     fetch('https://fakestoreapi.com/products/categories')
  //       .then(resp => resp.json())
  //       .then(json => setCategories(json))
  // }, []);

  useEffect(() => {
    getCategories(setCategories)
  }, []);

  return (
    <div>
      {
        categories.length === 0
        ? <p>'Categories are loading...'</p>
        : <div>
            {
              categories.map(el => <CategoryCard key={el} category={el} />)
            }
          </div>
      }
    </div>
  )
}
