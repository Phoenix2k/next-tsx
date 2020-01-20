import styled from '../../theme';

export const NavContainer = styled.nav`
  .nav-link {
    color: ${(props) => props.theme.colors.navLink};

    &--active {
      color: ${(props) => props.theme.colors.navLinkActive};
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
