import { getAllTags, getTag, getAllPostsByTagSlug } from "@/lib/tags";
import Head from "next/head";
import IndexPage from "..";
import styles from "./Tag.module.css";
import { SITE_NAME } from "@/lib/utils/constants";
import dateFormatter from "@/utils/dateFormatter";

const TagPage = (props) => {
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
  const tags = await getAllTags();

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const tagData = await getTag(params.slug);
  const posts = await getAllPostsByTagSlug(params.slug);

  posts.map((post) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tagData, posts },
  };
}

export default TagPage;
