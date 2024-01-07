import { PostList } from "@/blocks/PostList";
import { getAllPosts } from "@/api/ghost/utils";

const HomePage = async () => {
  const posts = await getAllPosts()
  return <PostList posts={posts} />;
};

export default HomePage;
