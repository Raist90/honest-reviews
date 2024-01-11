import { getAllPosts, getLatestPosts, getSinglePost } from "@/api/ghost/utils";
import { LatestPosts, PostEntry } from "@/blocks";
import { SITE_NAME } from "@/constants";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string
  }
}

/** @todo Figure out if you can retrieve `meta_keywords` from Ghost */
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = params
  const post = await getSinglePost(slug)
  const { meta_title, meta_description } = post
  return {
    title: `${meta_title} | ${SITE_NAME}`,
    description: meta_description,
    applicationName: SITE_NAME
  }
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

const PostPage = async ({ params }: Params) => {
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
