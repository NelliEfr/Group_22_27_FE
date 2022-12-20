import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
