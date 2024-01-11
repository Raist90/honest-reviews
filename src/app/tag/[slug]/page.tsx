import { PostList } from "@/blocks";
import { getAllPostsByTag, getAllTags, getSingleTag } from "@/api/ghost/utils";
import type { Metadata } from "next";
import { SITE_NAME } from "@/constants";
import { capitalize } from "@/utils";

type Params = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = params
  const tag = await getSingleTag(slug)
  return {
    title: `${capitalize(tag.name)} | ${SITE_NAME}`,
    description: tag.description || tag.name,
    applicationName: SITE_NAME
  }
}

export const generateStaticParams = async () => {
  const tags = await getAllTags()

  return tags.map((tag) => ({
    slug: tag.slug
  }))
}

const TagPage = async ({ params }: Params) => {
  const { slug } = params;

  const tagData = await getSingleTag(slug)
  const posts = await getAllPostsByTag(slug)
  return (
    <>
      <h1>{tagData?.name}</h1>

      <PostList posts={posts} />
    </>
  );
};

export default TagPage;
