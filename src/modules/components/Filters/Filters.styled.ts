import styled from 'styled-components';
import emotionStyled from '@emotion/styled';
import { NumberInput, Select } from '@mantine/core';

import { colors } from 'constants/colors';
import { controlsIcon } from 'constants/images';

export const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundBase};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borders.block.borderRadius}px;
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
  border-radius: ${({ theme }) => theme.borders.controls.borderRadius}px;
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
		right: 7px;

		&:hover {
			background: none;
		}

		svg {
			display: none;
		}

		&:first-of-type {
			::after {
				position: absolute;
				content: '';
				width: 10px;
				height: 6px;
				background: url(${controlsIcon.inputNum}) no-repeat;
				margin-top: 4px;
			}
		}

		&:last-child {
			::after {
				position: absolute;
				content: '';
				width: 10px;
				height: 6px;
				background: url(${controlsIcon.inputNum}) no-repeat;
				transform: rotate(180deg);
				margin-bottom: 6px;
			}
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

	.mantine-Select-rightSection {
		svg {
			display: none;
		}
		
		::after {
			position: absolute;
			right: 15px;
    	content: '';
			width: 17px;
			height: 9px;
			background: url(${controlsIcon.select}) no-repeat;
		}
	}
`;

export const ResetBtn = styled.div`
  position: absolute;
  top: 23px;
  right: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: ${({ theme }) => theme.cursor};

  ::after {
    position: absolute;
    top: 0px;
    right: 0;
    content: '';
    background: url(${controlsIcon.reset}) no-repeat;
    width: 16px;
    height: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
