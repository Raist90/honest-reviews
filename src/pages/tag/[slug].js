import { getAllTags, getTag, getAllPostsByTagSlug } from "@/lib/tags";
import IndexPage from "..";
import styles from "./Tag.module.css"

const TagPage = (props) => {
  const { tagData, posts } = props;

  return (
    <>
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

  const tagData = await getTag(params.slug)
  const posts = await getAllPostsByTagSlug(params.slug);

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
