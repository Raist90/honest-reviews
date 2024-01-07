import { PostList } from "@/blocks";
import { getAllAuthors, getAllPostsByAuthor, getSingleAuthor } from "@/api/ghost/utils";

export const generateStaticParams = async () => {
  const authors = await getAllAuthors()
  return authors.map((author) => ({
    slug: author.slug
  }))
}

const AuthorPage = async ({ params }) => {
  const { slug } = params;

  const author = await getSingleAuthor(slug)
  const posts = await getAllPostsByAuthor(slug)
  return (
    <>
      {/* <Head> */}
      {/*   <meta name="description" content={author.bio} /> */}
      {/*   <title>{`${SITE_NAME} | ${author.name}`}</title> */}
      {/* </Head> */}
      <h1>{author?.name}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: author?.bio }} /> */}
      <PostList posts={posts} />
    </>
  );
};

export default AuthorPage;
