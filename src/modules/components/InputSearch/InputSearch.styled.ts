import emotionStyled from '@emotion/styled';
import { TextInput } from '@mantine/core';
import styled from 'styled-components';

import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 16px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-bottom: 0px;
  }
`;

export const StyledInput = emotionStyled(TextInput)`
	input {
		height: 48px;
		border-radius: 8px;
		border: 1px solid ${theme.colors.border};
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;

		&:hover {
			border: 1px solid ${theme.colors.backgroundPrimary};
		}
	}
	.mantine-g9emdi[data-with-icon] {
    padding-left: 36px;

		@media (${theme.media.medium}) {
			padding-left: 30px;
		}
	}
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 83px;
  height: 32px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.textTertiary};
  border-radius: ${({ theme }) => theme.borders.controls.borderRadius}px;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  z-index: ${({ theme }) => theme.order.lastIndex};

  @media (${({ theme }) => theme.media.medium}) {
    width: 70px;
    height: 32px;
  }

  :hover ~ div div input {
    border: 1px solid ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;
