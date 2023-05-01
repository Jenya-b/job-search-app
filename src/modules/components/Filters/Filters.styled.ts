import styled from 'styled-components';
import emotionStyled from '@emotion/styled';
import { NumberInput, Select } from '@mantine/core';

import { colors } from 'constants/colors';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundBase};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;

export const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ParamsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textBase};
  }
`;

export const NumInput = emotionStyled(NumberInput)`
	input {
		height: 42px;
		border-radius: 8px;
		border: 1px solid ${colors.grey300};
		font-size: 14px;
  	font-weight: 400;
  	line-height: 20px;

		&:hover {
			border: 1px solid ${colors.blue500Main};
		}
	}

	button {
		border: none;

		&:hover {
			background: none;
		}
	}

	.mantine-x0i9fi:not(:disabled):hover,
	.mantine-1g3thxc:not(:disabled):hover {
    background: none;
	}
`;

export const StyledSelect = emotionStyled(Select)`
	input {
		height: 42px;
		border-radius: 8px;
		border: 1px solid ${colors.grey300};
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;

		&:hover {
			border: 1px solid ${colors.blue500Main};
		}
	}
`;
