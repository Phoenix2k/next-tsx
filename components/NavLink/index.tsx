import classNames from 'classNames';
import { useRouter } from 'next/router';

function NavLink({ children, href }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const linkClasses = classNames('link', {
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
