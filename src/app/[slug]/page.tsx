import { getGhostData } from "../../api";

const Page = async ({ params }) => {
  const { slug } = params;
  const data = await getGhostData("singlePage", slug);
  const page = data[0];
  /** @todo Add SEO component */
  return (
    <>
      {/* <Head> */}
      {/*   <meta name="description" content={page?.meta_description} /> */}
      {/*   <title>{`${SITE_NAME} | ${page?.meta_title}`}</title> */}
      {/* </Head> */}
      <main>
        <h1>{page?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.html }} />
      </main>
    </>
  );
};

export default Page;
