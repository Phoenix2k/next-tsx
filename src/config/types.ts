export interface Config {
  a11yEnv: Array<string>;
  pages: Pages;
  theme: Theme;
}

export interface Page {
  navLabel: string;
  slug: string;
  title: string;
  url: string;
}

export interface Pages {
  [key: string]: Page;
}

export interface Theme {
  classes: {
    navLinkActive: string;
  };
  colors: {
    backgroundColor: string;
    borderColor: string;
    color: string;
    navLink: string;
    navLinkActive: string;
  };
  typography: {
    sansSerif: string;
  };
}
