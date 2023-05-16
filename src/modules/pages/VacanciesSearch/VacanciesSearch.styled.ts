import styled, { css } from 'styled-components';

import { fragmentCardBlock } from 'styles/fragments';
import { theme } from 'styles/theme';

export const Container = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template: auto 1fr / 315px 1fr;
  column-gap: 28px;

  @media (${({ theme }) => theme.media.large}) {
    grid-template: auto 1fr / 265px 1fr;
    column-gap: 20px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    grid-template-columns: 1fr;
    row-gap: 15px;
    column-gap: 0px;
  }

  div:first-child {
    grid-row: 1/3;
  }
`;

export const listStyles = css`
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
