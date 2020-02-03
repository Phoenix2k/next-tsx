import styled from '../../theme';

export const NavContainer = styled.nav`
  .nav-link {
    color: ${(props) => props.theme.colors.navLink};
    display: inline-block;
    padding: 0.5em;

    &--active {
      color: ${(props) => props.theme.colors.navLinkActive};
    }
  }

  .nav-links {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
    }
  }
`;
