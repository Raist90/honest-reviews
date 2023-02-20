import { getSinglePost, getPosts } from "@/lib/posts";
import Link from "next/link";

const PostPage = (props) => {
  const { post } = props;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link href="/">Back to home</Link>

      <div>Author: <Link href={`/authors/${post.primary_author.slug}`}>{post.primary_author.name}</Link></div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const post = await getSinglePost(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;
