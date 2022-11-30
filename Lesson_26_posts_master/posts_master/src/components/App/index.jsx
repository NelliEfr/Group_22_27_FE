import PostsContainer from "../PostsContainer";
import { posts_data } from '../../data/posts'
import { useState, useEffect } from 'react'
import AddPostForm from "../AddPostForm";
import { Context } from '../../context'

function App() {

  const [ posts, setPosts ] = useState(posts_data);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('posts'));
    setPosts(res);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);
  

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

  const add_post = (title, text) => setPosts([
    ...posts,
    {
      id: Date.now(),
      title,
      text,
      like: false,
      comments: []
    }
  ]);

  const delete_post = (id) => setPosts(posts.filter(el => el.id !== id));

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    setPosts([...posts]);
  }

  return (
    <div>
      <Context.Provider value={{ delete_comment }}>
        <AddPostForm add_post={add_post} />
        <PostsContainer posts={posts} change_like={change_like} add_comment={add_comment} delete_post={delete_post} />
      </Context.Provider>
    </div>
  );
}

export default App;
