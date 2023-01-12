import React, { useEffect, useState } from 'react'

export default function Test() {

  const [ test, setTest ] = useState([]);


  const test_func = callback => {
    fetch('http://localhost:3333/products/all')
    .then(resp => resp.json())
    .then(json => callback(json))
  }

  useEffect(() => {
    test_func(setTest);
  }, []);

  console.log(test);

  const img = test.map(el => el.image);

  const img_url = `http://localhost:3333${img}`;

  return (
    <div>
      {
        test.map(el => <img src={img_url} alt={el.title} key={el.id} />) 
      }
    </div>
  )
}
