import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';
import { Urbanist } from 'next/font/google';
import '@src/theme/globals.css';

import { Layout } from '@src/components/templates/layout';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <main className={`${urbanist.variable} flex min-h-full flex-col font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <div id="portal" className={`${urbanist.variable} font-sans`} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
