import { PostList } from "../PostList";
import { PostType } from "@/types";

type LatestPostsProps = {
  latestPosts: PostType[];
};

export const LatestPosts: React.FC<LatestPostsProps> = async ({ latestPosts }) => {
  return (
    <section>
      <h1>Ultimi articoli</h1>
      <PostList posts={latestPosts} />
    </section>
  );
};
