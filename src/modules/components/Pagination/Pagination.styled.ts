import emotionStyled from '@emotion/styled';
import { Pagination } from '@mantine/core';

export const StyledPagination = emotionStyled(Pagination)`
	margin-top: 40px;
	justify-content: center;
	column-gap: 8px;

	button {
		min-width: 32px;
		height: 32px;
	}
`;
