import { getPages, getSinglePage } from "@/lib/pages";

const Page = (props) => {
  const { page } = props;

  return (
    <main>
      <h1>{page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.html }} />
    </main>
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

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
  };
}

export default Page;
