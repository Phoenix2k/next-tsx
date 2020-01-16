import NavLink from '../NavLink';
import { NavContainer } from './styles';

const Nav = (): JSX.Element => (
  <NavContainer>
    <ul>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
