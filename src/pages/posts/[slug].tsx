import Head from "next/head";
import { GetStaticPropsContext, NextPage } from "next";

import { getSinglePost, getPosts, getLatestPosts } from "../../lib/posts";
import { SITE_NAME } from "../../lib/utils/constants";
import IndexPage from "..";
import { PostEntry } from "../../containers/PostEntry";
import dateFormatter from "../../utils/dateFormatter";
import { LatestPosts } from "../../containers/LatestPosts";
import { getSettings } from "../../lib/settings";
import { PostType } from "../../types";

const PostPage: NextPage<PostPageProps> = (props) => {
  const { post, latestPosts } = props;

  return (
    <>
      <Head>
        <meta name="description" content={post?.meta_description} />
        <title>{`${SITE_NAME} | ${post?.meta_title}`}</title>
      </Head>

      <PostEntry {...{ post }} />

      <LatestPosts>
        <IndexPage {...{ posts: latestPosts }} />
      </LatestPosts>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post: PostType) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<any> {
  const { params } = context;

  const post = await getSinglePost(params.slug);
  const latestPosts = await getLatestPosts(params.slug);
  const settings = await getSettings();

  latestPosts.map((post: PostPageProps["post"]) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, latestPosts, settings },
  };
}

type PostPageProps = {
  post: PostType;
  latestPosts: PostType[];
};

export default PostPage;
