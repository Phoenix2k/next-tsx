import ActiveLink from './ActiveLink';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about">
            <a>About Us</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
