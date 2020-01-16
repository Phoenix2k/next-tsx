import classnames from 'classnames';
import { useRouter } from 'next/router';
import { InterfaceNavLink } from './types';

function NavLink({ children, href }: InterfaceNavLink): JSX.Element {
  const router = useRouter();
  const isActive = router.pathname === href;
  const linkClasses = classnames('link', {
    'nav-link--active': isActive
  });
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    router.push(href);
  };
  return (
    <a className={linkClasses} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default NavLink;
