import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";

import { getAllTags, getTag, getAllPostsByTagSlug } from "../../lib/tags";
import IndexPage from "..";
import styles from "./Tag.module.css";
import { SITE_NAME } from "../../lib/utils/constants";
import dateFormatter from "../../utils/dateFormatter";
import { getSettings } from "../../lib/settings";
import { PostType, TagType } from "../../types";

const TagPage: NextPage<TagPageProps> = (props) => {
  const { tagData, posts } = props;

  return (
    <>
      <Head>
        <meta name="description" content={tagData?.description} />
        <title>{`${SITE_NAME} | ${tagData?.name}`}</title>
      </Head>

      <h1 className={styles.tagDataTitle}>{tagData?.name}</h1>

      <IndexPage posts={posts} />
    </>
  );
};

export async function getStaticPaths() {
  const tags: TagType[] = await getAllTags();

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const tagData = await getTag(params.slug);
  const posts: PostType[] = await getAllPostsByTagSlug(params.slug);
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
    props: { tagData, posts, settings },
  };
}

type TagPageProps = {
  posts: PostType[];
  tagData: TagType;
};

export default TagPage;
