import { Provider } from "@frontend/providers";
import Head from "next/head";
import "raf/polyfill";
import "setimmediate";

import { AppProps } from "next/app";
import "../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta name="description" content="Expo + Next.js with Solito. By Fernando Rojo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
