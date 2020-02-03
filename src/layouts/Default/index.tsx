import Nav from '../../components/Nav';
import { LayoutContainer } from './styles';
import { DefaultLayoutProps } from './types';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => (
  <LayoutContainer>
    <header>Header</header>
    <Nav />
    <main>{children}</main>
    <footer>Footer</footer>
  </LayoutContainer>
);

export default DefaultLayout;
