export const activeLink = {
  class: 'nav-link--active',
  color: 'rgb(0, 128, 0)'
};

export interface PageProps {
  navLabel: string;
  slug: string;
  title: string;
  url: string;
}

export interface Pages {
  [key: string]: PageProps;
}

export const pages: Pages = {
  about: {
    navLabel: 'About',
    slug: 'about-page',
    title: 'About page',
    url: '/about'
  },
  home: {
    navLabel: 'Home',
    slug: 'home-page',
    title: 'Home page',
    url: '/'
  }
};
