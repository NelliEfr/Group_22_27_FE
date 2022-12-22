import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { load_products } from '../../store/requests/products';
import { useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';

export default function ProductsContainer() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(load_products)
  }, []);

  return (
    products.length === 0
    ? <p>Products are loading...</p>
    : <div>
        {
          products.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
  )
}
