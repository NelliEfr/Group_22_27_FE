import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='categories/:category' element={<ProductsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
