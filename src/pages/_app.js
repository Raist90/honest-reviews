import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { SITE_NAME } from "@/lib/utils/constants";

export default function App({ Component, pageProps }) {
  const { settings } = pageProps;

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Honest Reviews, recensioni oneste di videogames"
        />
      </Head>
      <Layout {...{ settings }}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
