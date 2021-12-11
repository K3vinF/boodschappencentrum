import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import '../styles/main.scss';

// eslint-disable-next-line react/jsx-props-no-spreading
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const GA = 'G-P9ZZ3YFQSF';

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // @ts-ignore gtag doesn't exsist
      window.gtag('config', GA, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
