import { PostList } from "@/blocks";
import { getAllAuthors, getAllPostsByAuthor, getSingleAuthor } from "@/api/ghost/utils";
import { SITE_NAME } from "@/constants";
import { capitalize } from "@/utils";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = params
  const author = await getSingleAuthor(slug)
  return {
    title: `${capitalize(author.name)} | ${SITE_NAME}`,
    description: author.bio,
    applicationName: SITE_NAME
  }
}

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
      <h1>{author?.name}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: author?.bio }} /> */}
      <PostList posts={posts} />
    </>
  );
};

export default AuthorPage;
