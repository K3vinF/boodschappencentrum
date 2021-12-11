import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA = 'G-P9ZZ3YFQSF';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className={'bg-gray-100 text-white '}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
