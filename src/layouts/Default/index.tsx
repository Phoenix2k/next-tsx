import Nav from '../../components/Nav';
import { LayoutContainer } from './styles';
import { DefaultLayoutProps } from './types';

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({ children }) => (
  <LayoutContainer>
    <header>Header</header>
    <Nav />
    <main>{children}</main>
    <footer>Footer</footer>
  </LayoutContainer>
);

export default DefaultLayout;
