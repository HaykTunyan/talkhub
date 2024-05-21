import { ThemeProvider } from "next-themes";
import { appWithTranslation  } from 'next-i18next';
import { Trans  } from 'react-i18next';

import './i18n';
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Trans i18nKey={"description"}>
        <Component {...pageProps} />
      </Trans>

    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
