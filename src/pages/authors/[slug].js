import {
  getAuthor,
  getAllAuthors,
  getAllPostsByAuthorSlug,
} from "@/lib/authors";
import Head from "next/head";
import IndexPage from "..";
import { SITE_NAME } from "@/lib/utils/constants";

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

  posts.map((post) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    post.dateFormatted = new Intl.DateTimeFormat("it-IT", options).format(
      new Date(post.published_at)
    );
  });

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: { author, posts },
  };
}
export default AuthorPage;
