import { css, Global } from '@emotion/core';
import Nav from '../../components/Nav';
import { LayoutContainer } from './styles';
import { InterfaceDefaultLayout } from './types';

const DefaultLayout = ({ children }: InterfaceDefaultLayout): JSX.Element => (
  <>
    <Global
      styles={css`
        body,
        html {
          font-family: Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <LayoutContainer>
      <header>Header</header>
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </LayoutContainer>
  </>
);

export default DefaultLayout;
