import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../requests/products';

export default function ProductsPage() {

  const [ products, setProducts ] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getProductsByCategory(category, setProducts)
  }, []);

  console.log(products);

  return (
    <div>
      { category }
    </div>
  )
}
