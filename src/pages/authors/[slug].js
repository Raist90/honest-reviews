import { getAuthor, getAllAuthors } from "@/lib/authors";

const AuthorPage = (props) => {
  const { author } = props;

  return (
    <div>
      <h1>{author.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: author.bio }} />
    </div>
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

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: { author },
  };
}
export default AuthorPage;
