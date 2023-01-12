import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../requests/product_req';
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'

export default function ProductPage() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const { id } = useParams();

  useEffect(() => {
    dispatch(load_product(id))
  }, []);

  const { title, description, price, image } = product;

  return (
    <div className={s.product_item}>
      <img src={image} alt={title} />
      <div className={s.info_block}>
        <p className={s.title}>{title}</p>
        <p className={s.description}>{description}</p>
        <div className={s.price_block}>
          <p>
            <span>Price:</span> {price}
          </p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
