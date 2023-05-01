import styled, { css } from 'styled-components';
import emotionStyled from '@emotion/styled';
import { Pagination } from '@mantine/core';

import { colors } from 'constants/colors';

export const Container = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 315px 1fr;
  column-gap: 28px;
`;

export const Content = styled.div``;

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

export const StyledPagination = emotionStyled(Pagination)`
	margin-top: 40px;
	justify-content: center;
	column-gap: 8px;

	button {
		min-width: 32px;
		height: 32px;
	}
`;
