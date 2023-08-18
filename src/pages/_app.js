import Head from "next/head";

import SettingsProvider from "../contexts/Settings";
import "../styles/globals.css";
import Layout from "../components/Layout/index";
import { SITE_NAME } from "../lib/utils/constants";

export default function App({ Component, pageProps }) {
  // const { settings } = pageProps;

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Honest Reviews, recensioni oneste di videogames"
        />
      </Head>
      <SettingsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SettingsProvider>
    </>
  );
}
