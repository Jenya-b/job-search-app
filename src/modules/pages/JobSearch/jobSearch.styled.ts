import styled, { css } from 'styled-components';

import { colors } from 'constants/colors';

export const Container = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 315px 1fr;
  column-gap: 28px;
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
