import { useRouter } from "next/router";
import { NextPage } from "next";

import { PostType, SettingsType, MetaType } from "../types";
import { getPosts } from "../lib/posts";
import { PostList } from "../containers/PostList";
import dateFormatter from "../utils/dateFormatter";
import { useSettings } from "../contexts/Settings";

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { posts, meta } = props;
  const { asPath } = useRouter();
  const settings = useSettings();

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

  posts.map((post: PostType) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, meta },
  };
}

type IndexPageProps = {
  posts: PostType[];
  settings?: SettingsType;
  meta?: MetaType;
  asPath?: string;
};

export default IndexPage;
