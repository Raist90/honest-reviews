import Head from "next/head";

import { getPages, getSinglePage } from "@/lib/pages";
import { SITE_NAME } from "@/lib/utils/constants";
import { getSettings } from "@/lib/settings";

const Page = (props) => {
  const { page } = props;

  return (
    <>
      <Head>
        <meta name="description" content={page?.meta_description} />
        <title>{`${SITE_NAME} | ${page?.meta_title}`}</title>
      </Head>
      <main>
        <h1>{page?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.html }} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const pages = await getPages();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const page = await getSinglePage(params.slug);
  const settings = await getSettings();

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page, settings },
  };
}

export default Page;
