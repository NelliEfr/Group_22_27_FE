import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../requests/product';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function ProductDescriptionPage() {

  const [ product, setProduct ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id, setProduct)
  }, []);

  const { image, price, description, title, category } = product;

  return (
    <div>
      <div className={s.product_descr}>
        <img src={image} alt={title} />
        <div className={s.product_info}>
          <h3>{ title }</h3>
          <p>{ description }</p>
          <p>Price: { price }</p>
        </div>
      </div>
      
      <Link to={`/categories/${category}`}>
        <button className={s.back_btn}>Back</button>
      </Link>
    </div>
  )
}
