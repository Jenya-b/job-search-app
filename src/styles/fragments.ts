import { css } from 'styled-components';

import { theme } from './theme';

export const fragmentCardBlock = css`
  background: ${theme.colors.backgroundBase};
  padding: 24px;
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;

  @media (${theme.media.small}) {
    padding: 15px;
  }
`;

export const listStylesBlockCards = css`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (${theme.media.medium}) {
    row-gap: 10px;
  }

  li {
    ${fragmentCardBlock}
  }
`;
