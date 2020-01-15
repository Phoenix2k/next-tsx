import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    color: router.pathname === href ? 'green' : 'blue'
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
