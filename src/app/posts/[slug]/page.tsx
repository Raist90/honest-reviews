import { getAllPosts, getLatestPosts, getSinglePost } from "@/api/ghost/utils";
import { LatestPosts, PostEntry } from "@/blocks";

export const generateStaticParams = async () => {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

const PostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getSinglePost(slug)
  const latestPosts = await getLatestPosts(slug)
  return (
    <>
      <PostEntry post={post} />
      <LatestPosts latestPosts={latestPosts} />
    </>
  );
};

export default PostPage;
