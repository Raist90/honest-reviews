import { getGhostData } from "../api/ghost";
import { PostList } from "../containers/PostList";

const HomePage = async ({ posts }) => {
  const postsData = posts ? posts : await getGhostData("posts");
  return <PostList posts={postsData} />;
};

export default HomePage;
