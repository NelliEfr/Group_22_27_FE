import PostsContainer from "../PostsContainer";
import { posts } from '../../data/posts'

function App() {
  return (
    <div>
      <PostsContainer posts={posts} />
    </div>
  );
}

export default App;
