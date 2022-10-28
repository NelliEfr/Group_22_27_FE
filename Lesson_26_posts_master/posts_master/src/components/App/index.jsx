import PostsContainer from "../PostsContainer";
import { posts_data } from '../../data/posts'
import { useState } from 'react'

function App() {

  const [ posts, setPosts ] = useState(posts_data);

  const change_like = id => {
    const target = posts.find(el => el.id === id);
    target.like = !target.like;
    setPosts([...posts]);
  }

  return (
    <div>
      <PostsContainer posts={posts} change_like={change_like} />
    </div>
  );
}

export default App;
