import { useRouter } from "next/router";

import { getPosts } from "@/lib/posts";
import { getSettings } from "@/lib/settings";
import { PostList } from "@/containers/PostList";
import dateFormatter from "@/utils/dateFormatter";

const IndexPage = (props) => {
  const { posts, settings, meta } = props;
  const { asPath } = useRouter();

  const cmsData = {
    posts,
    settings,
    asPath,
    meta,
  };

  return (
    <>
      <PostList {...cmsData} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  const { meta } = posts;
  const settings = await getSettings();

  posts.map((post) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, settings, meta },
  };
}

export default IndexPage;
