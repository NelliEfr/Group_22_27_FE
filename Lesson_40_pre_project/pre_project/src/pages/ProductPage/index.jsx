import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../requests/product_req';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';
import s from './index.module.css'

export default function ProductPage() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const { id } = useParams();

  const product_id = product.id;

  const add_to_cart = () => dispatch(addToCart({id: product_id, title, image, price}))

  // let product_id = product.map(el => el.id);

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
          <button onClick={add_to_cart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
