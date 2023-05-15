import styled, { css } from 'styled-components';

import { colors } from 'constants/colors';

export const Container = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template: auto 1fr / 315px 1fr;
  column-gap: 28px;

  div:first-child {
    grid-row: 1/3;
  }
`;

export const listStyles = css`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  li {
    background: ${colors.white};
    padding: 24px;
    border: 1px solid ${colors.grey200};
    border-radius: 12px;
  }
`;
