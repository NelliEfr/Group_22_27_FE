import { Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import PostsPage from '../../pages/PostsPage';
import UsersPage from '../../pages/UsersPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/users' element={ <UsersPage /> } />
        <Route path='/posts' element={ <PostsPage /> } />
      </Routes>
      
    </div>
  );
}

export default App;
