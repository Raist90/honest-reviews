import { getGhostData } from "../../../api";
import { LatestPosts } from "../../../containers/LatestPosts";
import { PostEntry } from "../../../containers/PostEntry";
import HomePage from "../../page";

const PostPage = async ({ params }) => {
  const { slug } = params;
  const data = await getGhostData("singlePost", slug);
  const post = data[0];

  const latestPostsData = await getGhostData("latestPosts", slug);
  /** @todo Move this logic into a helper or formatter */
  const latestPosts = latestPostsData
    .filter((post) => post.slug !== slug)
    .slice(0, 3);
  return (
    <>
      <PostEntry post={post} />
      <LatestPosts>
        <HomePage posts={latestPosts} />
      </LatestPosts>
    </>
  );
};

export default PostPage;
