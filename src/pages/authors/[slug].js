import Head from "next/head";

import {
  getAuthor,
  getAllAuthors,
  getAllPostsByAuthorSlug,
} from "@/lib/authors";
import IndexPage from "..";
import { SITE_NAME } from "@/lib/utils/constants";
import dateFormatter from "@/utils/dateFormatter";
import { getSettings } from "@/lib/settings";

const AuthorPage = (props) => {
  const { author, posts } = props;

  return (
    <>
      <Head>
        <meta name="description" content={author.bio} />
        <title>{`${SITE_NAME} | ${author.name}`}</title>
      </Head>
      <h1>{author?.name}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: author?.bio }} /> */}
      <IndexPage posts={posts} />
    </>
  );
};

export async function getStaticPaths() {
  const authors = await getAllAuthors();

  const paths = authors.map((author) => ({
    params: { slug: author.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const author = await getAuthor(params.slug);
  const posts = await getAllPostsByAuthorSlug(params.slug);
  const settings = await getSettings();

  posts.map((post) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: { author, posts, settings },
  };
}
export default AuthorPage;
