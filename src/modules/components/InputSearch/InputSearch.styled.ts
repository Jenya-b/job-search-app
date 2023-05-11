import emotionStyled from '@emotion/styled';
import { TextInput } from '@mantine/core';
import styled from 'styled-components';

import { colors } from 'constants/colors';

export const Wrapper = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 16px;
`;

export const StyledInput = emotionStyled(TextInput)`
	input {
		height: 48px;
		border-radius: 8px;
		border: 1px solid ${colors.grey200};
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;

		&:hover {
			border: 1px solid ${colors.blue500Main};
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
  font-size: 14px;
  line-height: 21px;
`;
