import { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { ApplicationContainer } from '@/components/ApplicationWrapper';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  /**
   * the getLayout method is used by next to conditionally show elements in pages
   * using Mantine it's possible to do the have the same behavior with appShell in the ApplicationContainer component
   */
  const getLayout = Component.getLayout ?? ((page) => page);
  const NextWay: boolean = true;

  if (NextWay) {
    return getLayout(
      <>
        <Head>
          <title>The Next</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  if (!NextWay) {
    return (
      <ApplicationContainer>
        <Head>
          <title>The Next</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ApplicationContainer>
    );
  }
}
