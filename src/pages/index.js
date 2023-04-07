import { useRouter } from "next/router";

import { getPosts } from "@/lib/posts";
import { PostList } from "@/containers/PostList";
import dateFormatter from "@/utils/dateFormatter";

const IndexPage = (props) => {
  const { posts } = props;

  const { asPath } = useRouter();

  return (
    <>
      <PostList posts={posts} asPath={asPath} />
    </>
  );
};

export async function getStaticProps(context) {
  const posts = await getPosts();

  posts.map((post) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default IndexPage;
