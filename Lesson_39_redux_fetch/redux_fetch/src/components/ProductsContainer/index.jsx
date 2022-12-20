import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { load_products } from '../../store/requests/products';
import { useDispatch } from 'react-redux';

export default function ProductsContainer() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(load_products)
  }, []);

  console.log(products);

  return (
    <div>ProductsContainer</div>
  )
}
