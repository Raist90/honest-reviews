import { getGhostData } from "../api/ghost";
import { PostList } from "../containers/PostList";

const HomePage = async () => {
  const posts = await getGhostData("posts");
  return <PostList posts={posts} />;
};

export default HomePage;
