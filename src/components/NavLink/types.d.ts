import { ReactNode } from 'react';

export interface NavLinkProps {
  children?: ReactNode;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
