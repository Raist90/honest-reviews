import {
  getAuthor,
  getAllAuthors,
  getAllPostsByAuthorSlug,
} from "@/lib/authors";
import IndexPage from "..";

const AuthorPage = (props) => {
  const { author, posts } = props;

  return (
    <>
      <h1>{author?.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: author?.bio }} />
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
