import NavLink from '../NavLink';
import { NavContainer } from './styles';

const Nav = (): JSX.Element => (
  <NavContainer role="navigation" title="Navigation">
    <ul className="nav-links">
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
