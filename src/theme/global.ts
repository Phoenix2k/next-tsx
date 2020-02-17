import { css } from '@emotion/core';
import config from '../config';

export const globalStyles = css`
  body,
  code,
  html,
  input {
    font-family: ${config.theme.typography.sansSerif};
    margin: 0;
    padding: 0;
  }
`;
