import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../requests/product_req';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductPage() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const { id } = useParams();

  useEffect(() => {
    dispatch(load_product(id))
  }, []);

  console.log(product);

  return (
    <div>ProductPage {id}</div>
  )
}
