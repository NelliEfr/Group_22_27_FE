import PostsPage from "../../pages/PostsPage";
import UsersPage from "../../pages/UsersPage";
import NavMenu from "../NavMenu";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/users_page" element={<UsersPage />} />
        <Route path="/posts_page" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
