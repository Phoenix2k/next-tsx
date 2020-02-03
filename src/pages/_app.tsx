import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import { globalStyles, theme } from '../theme';

interface NextAppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, {}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps?: any;
}

const NextApp = ({ Component, pageProps }: NextAppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default NextApp;
