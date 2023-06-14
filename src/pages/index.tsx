import { useRouter } from "next/router";
import { NextPage } from "next";

import { PostType, SettingsType, MetaType } from "../../types/index";
import { getPosts } from "../lib/posts";
import { getSettings } from "../lib/settings";
import { PostList } from "../containers/PostList";
import dateFormatter from "../utils/dateFormatter";

const IndexPage: NextPage<IndexPageProps> = (props) => {
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

  posts.map((post: PostType) => {
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

interface IndexPageProps {
  posts: PostType[];
  settings: SettingsType;
  meta: MetaType;
  asPath: string;
}

export default IndexPage;
