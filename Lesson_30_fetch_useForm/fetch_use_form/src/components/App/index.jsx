import PostsPage from "../../pages/PostsPage";
import UsersPage from "../../pages/UsersPage";
import NavMenu from "../NavMenu";
import { Routes, Route } from 'react-router-dom'
import { getUsers } from '../../requests/users'
import { getPosts } from "../../requests/posts";
import { getToDos } from "../../requests/todos";
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import ToDosPage from "../../pages/ToDosPage";

function App() {

  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
    getPosts(setPosts);
    getToDos(setTodos);
  }, []);


  const createNewUser = user => setUsers(prev => [...prev, user]);
  const createNewPost = post => setPosts(prev => [...prev, post]);
  const createNewToDo = todo => setTodos(prev => [...prev, todo]);

  return (
    <div>
      <Context.Provider value={{ users, createNewUser, posts, createNewPost, todos, createNewToDo }}>
        <NavMenu />
        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/posts_page" element={<PostsPage />} />
          <Route path="/todos_page" element={<ToDosPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
