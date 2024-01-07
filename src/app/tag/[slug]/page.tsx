import { PostList } from "@/blocks";
import { getAllPostsByTag, getAllTags, getSingleTag } from "@/api/ghost/utils";

export const generateStaticParams = async () => {
  const tags = await getAllTags()

  return tags.map((tag) => ({
    slug: tag.slug
  }))
}

const TagPage = async ({ params }) => {
  const { slug } = params;

  const tagData = await getSingleTag(slug)
  const posts = await getAllPostsByTag(slug)
  return (
    <>
      {/* <Head> */}
      {/*   <meta name="description" content={tagData?.description} /> */}
      {/*   <title>{`${SITE_NAME} | ${tagData?.name}`}</title> */}
      {/* </Head> */}

      <h1>{tagData?.name}</h1>

      <PostList posts={posts} />
    </>
  );
};

export default TagPage;
