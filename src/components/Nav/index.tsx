import styled from '@emotion/styled';
import NavLink from '../NavLink';

const NavContainer = styled.nav`
  .nav-link {
    color: blue;

    &--active {
      color: green;
    }
  }

  .nav-list {
    li {
      display: inline-block;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  }
`;

const Nav = () => (
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
