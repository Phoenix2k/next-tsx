import { css } from '@emotion/core';
import styled, { CreateStyled } from '@emotion/styled';

export const globalStyles = css`
  body,
  html {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export type ThemeProps = {
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
};

export const theme: ThemeProps = {
  colors: {
    backgroundColor: 'rgb(255,255,255)',
    borderColor: '#ccc',
    color: 'black',
    navLink: 'blue',
    navLinkActive: 'green'
  },
  typography: {
    sansSerif: 'Helvetica, Arial, sans-serif'
  }
};

export default styled as CreateStyled<ThemeProps>;
