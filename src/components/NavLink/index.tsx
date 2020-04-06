import classnames from 'classnames';
import { useRouter } from 'next/router';
import { NavLinkProps } from './types';

const NavLink: React.FunctionComponent<NavLinkProps> = ({ children, href, onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const linkClasses = classnames('nav-link', {
    'nav-link--active': isActive
  });
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    router.push(href);
  };
  return (
    <a className={linkClasses} href={href} onClick={onClick || handleClick}>
      {children}
    </a>
  );
};

export default NavLink;
