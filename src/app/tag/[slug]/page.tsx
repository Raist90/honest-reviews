import { getGhostData } from "../../../api";
import HomePage from "../../page";
import styles from "./Tag.module.css";

const TagPage = async ({ params }) => {
  const { slug } = params;
  const rawTagData = await getGhostData("singleTag", slug);
  const tagData = rawTagData[0];
  const posts = await getGhostData("allPostsByTag", slug);
  return (
    <>
      {/* <Head> */}
      {/*   <meta name="description" content={tagData?.description} /> */}
      {/*   <title>{`${SITE_NAME} | ${tagData?.name}`}</title> */}
      {/* </Head> */}

      <h1 className={styles.tagDataTitle}>{tagData?.name}</h1>

      <HomePage posts={posts} />
    </>
  );
};

export default TagPage;
