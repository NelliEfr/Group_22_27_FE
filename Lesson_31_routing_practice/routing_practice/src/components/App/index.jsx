import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { vegetables } from '../../data/vegetables'
import { fruits } from '../../data/fruits'
import { Context } from '../../context'

function App() {

  const [ vegCards, setVegCards ] = useState(vegetables);
  const [ frutCards, setFrutCards ] = useState(fruits);

  const delete_veg = (id) => setVegCards(vegCards.filter(el => el.id !== id));
  const delete_frut = (id) => setFrutCards(frutCards.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ vegCards, frutCards, delete_veg, delete_frut }}>
        <Nav />
        <Routes>
          <Route path="/fruits_page" element={ <FruitsPage /> } />
          <Route path="/vegetables_page" element={ <VegetablesPage /> } />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
