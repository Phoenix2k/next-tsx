import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Nav from '../../components/Nav';
import { globalStyles, theme } from '../../theme';
import { LayoutContainer } from './styles';
import { DefaultLayoutProps } from './types';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => (
  <>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <header>Header</header>
        <Nav />
        <main>{children}</main>
        <footer>Footer</footer>
      </LayoutContainer>
    </ThemeProvider>
  </>
);

export default DefaultLayout;
