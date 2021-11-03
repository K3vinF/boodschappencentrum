import React from 'react';

import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import '../styles/main.scss';
// import '../styles/prism-a11y-dark.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
