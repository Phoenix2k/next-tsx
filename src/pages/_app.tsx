import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ReactAxeConfig } from 'react-axe';
import ReactDOM from 'react-dom';
import manifest from '../../public/manifest.json';
import config from '../config';
import { globalStyles } from '../theme';

/* istanbul ignore next */
if (
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  config.a11yEnv.includes(process.env.NODE_ENV)
) {
  const reactAxe = require('react-axe');
  const reactAxeConfig: ReactAxeConfig = {
    rules: [
      {
        enabled: false,
        id: 'region'
      }
    ]
  };
  reactAxe(React, ReactDOM, 1000, reactAxeConfig);
}

const NextApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link key="manifest" rel="manifest" href="/manifest.json" />
      <meta key="theme-color" name="theme-color" content={manifest.theme_color} />
      <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider theme={config.theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default NextApp;
