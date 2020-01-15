import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import Nav from '../../components/Nav';

const LayoutContainer = styled.div`
  border: 1px solid #ddd;
  margin: 1em;
  padding: 1em;
`;

const DefaultLayout = (props: any) => (
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
      <main>{props.children}</main>
      <footer>Footer</footer>
    </LayoutContainer>
  </>
);

export default DefaultLayout;
