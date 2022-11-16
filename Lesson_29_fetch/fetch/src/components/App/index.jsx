import { getProducts } from '../../requests/products'
import { useState, useEffect } from 'react'
import ProductsContainer from '../ProductsContainer';
import { Context } from '../../context'

function App() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts(setProducts)
  }, [])
  
  return (
    <div>
      <Context.Provider value={{ products }}>
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
