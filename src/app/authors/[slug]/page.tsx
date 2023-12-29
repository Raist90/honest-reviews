import { getGhostData } from "../../../api";
import HomePage from "../../page";

const AuthorPage = async ({ params }) => {
  const { slug } = params;
  const authorData = await getGhostData("singleAuthor", slug);
  const author = authorData[0];
  const posts = await getGhostData("allPostsByAuthor", slug);
  return (
    <>
      {/* <Head> */}
      {/*   <meta name="description" content={author.bio} /> */}
      {/*   <title>{`${SITE_NAME} | ${author.name}`}</title> */}
      {/* </Head> */}
      <h1>{author?.name}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: author?.bio }} /> */}
      <HomePage posts={posts} />
    </>
  );
};

export default AuthorPage;
