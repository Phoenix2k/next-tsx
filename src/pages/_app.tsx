import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import { ReactAxeConfig } from 'react-axe';
import ReactDOM from 'react-dom';
import { enableA11y, globalStyles, theme } from '../theme';

interface NextAppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, {}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps?: any;
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && enableA11y.includes(process.env.NODE_ENV)) {
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

const NextApp = ({ Component, pageProps }: NextAppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default NextApp;
