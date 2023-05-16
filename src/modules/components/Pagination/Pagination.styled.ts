import emotionStyled from '@emotion/styled';
import { Pagination } from '@mantine/core';

import { theme } from 'styles/theme';

export const StyledPagination = emotionStyled(Pagination)`
	margin-top: 40px;
	justify-content: center;
	column-gap: 8px;

	@media (${theme.media.medium}) {
    margin-top: 20px;
  }

	button {
		min-width: 32px;
		height: 32px;
	}
`;
