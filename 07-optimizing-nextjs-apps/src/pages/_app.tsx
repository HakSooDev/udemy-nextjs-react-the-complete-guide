import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Next JS events" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width= device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
