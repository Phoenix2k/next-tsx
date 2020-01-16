import styled from '@emotion/styled';

export const NavContainer = styled.nav`
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
