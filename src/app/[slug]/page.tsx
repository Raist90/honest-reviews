import { getAllPages, getSinglePage } from "@/api/ghost/utils";
import { SITE_NAME } from "@/constants";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = params
  const page = await getSinglePage(slug)
  const { meta_title, meta_description } = page
  return {
    title: `${meta_title} | ${SITE_NAME}`,
    description: meta_description,
    applicationName: SITE_NAME
  }
}

export const generateStaticParams = async () => {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug
  }))
}

const Page = async ({ params }: Params) => {
  const { slug } = params;

  const page = await getSinglePage(slug)
  return (
    <>
      <main>
        <h1>{page?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.html }} />
      </main>
    </>
  );
};

export default Page;
