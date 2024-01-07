import { getAllPages, getSinglePage } from "@/api/ghost/utils";

export const generateStaticParams = async () => {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug
  }))
}

const Page = async ({ params }) => {
  const { slug } = params;

  const page = await getSinglePage(slug)
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
