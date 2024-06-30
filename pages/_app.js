import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next';
import { Trans } from 'react-i18next';
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TalkHub</title>
        <meta name="description" content="TalkHub Website" />
        <link rel="icon" href="/icon/TalkhubLogoWithoutText.svg" />
      </Head>
      <ThemeProvider attribute="class">
        <Trans i18nKey={"description"}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Trans>

      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
