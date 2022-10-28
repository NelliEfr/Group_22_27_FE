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

  const add_comment = (id, value) => {
    const comment = {
      id: Date.now(),
      text: value
    }

    const target = posts.find(el => el.id === id);
    target.comments.push(comment);
    setPosts([...posts]);
  }

  return (
    <div>
      <PostsContainer posts={posts} change_like={change_like} add_comment={add_comment} />
    </div>
  );
}

export default App;
