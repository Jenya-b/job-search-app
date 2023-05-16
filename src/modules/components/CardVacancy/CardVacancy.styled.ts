import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mapIcon, starActiveIcon, starIcon } from 'constants/images';
import { colors } from 'constants/colors';

interface StyledProps {
  isDescComponent: boolean;
}

export const Wrapper = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: ${({ isDescComponent }) => (isDescComponent ? 22.5 : 12)}px;
  z-index: ${({ theme }) => theme.order.lastIndex};
`;

export const Title = styled(NavLink)<StyledProps>`
  padding-right: 25px;
  font-weight: ${({ isDescComponent }) => (isDescComponent ? 700 : 600)};
  font-size: ${({ isDescComponent }) => (isDescComponent ? 28 : 20)}px;
  line-height: 24px;
  color: ${({ isDescComponent }) => (isDescComponent ? colors.black : colors.blue500Main)};
  cursor: ${({ theme }) => theme.cursor};
`;

export const Descriptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 33px;
`;

export const Payment = styled.p<StyledProps>`
  font-weight: ${({ isDescComponent }) => (isDescComponent ? 700 : 600)};
  font-size: ${({ isDescComponent }) => (isDescComponent ? 20 : 16)}px;
  line-height: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #7b7c88;
    top: 50%;
    transform: translateY(-50%);
    right: -18px;
  }
`;

export const TypeWork = styled.p<StyledProps>`
  font-weight: 400;
  font-size: ${({ isDescComponent }) => (isDescComponent ? 20 : 16)}px;
  line-height: 20px;
`;

export const InfoAddress = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url(${mapIcon}) no-repeat;
    left: 1px;
  }
`;

interface StarProps {
  isFavorite: boolean;
}

export const Star = styled.div<StarProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 22px;
  background: url(${({ isFavorite }) => (isFavorite ? starActiveIcon : starIcon)}) no-repeat;
  cursor: ${({ theme }) => theme.cursor};
`;
