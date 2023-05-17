import styled from 'styled-components';

import { mapIcon, starActiveIcon, starIcon } from 'constants/images';
import { colors } from 'constants/colors';
import { theme } from 'styles/theme';

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

export const Title = styled.h2<StyledProps>`
  padding-right: 25px;
  font-weight: ${({ isDescComponent }) => (isDescComponent ? 700 : 600)};
  font-size: ${({ isDescComponent }) => (isDescComponent ? 28 : 20)}px;
  line-height: 24px;
  color: ${({ isDescComponent }) =>
    isDescComponent ? theme.colors.textBase : theme.colors.textPrimary};
  cursor: ${({ isDescComponent }) => (isDescComponent ? 'auto' : theme.cursor)};

  @media (${({ theme }) => theme.media.small}) {
    font-size: 18px;
  }
`;

export const Descriptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 33px;

  @media (${({ theme }) => theme.media.small}) {
    flex-direction: column;
    align-items: start;
    column-gap: 0;
    row-gap: 5px;
  }
`;

export const Payment = styled.p<StyledProps>`
  font-weight: ${({ isDescComponent }) => (isDescComponent ? 700 : 600)};
  font-size: ${({ isDescComponent }) => (isDescComponent ? 20 : 16)}px;
  line-height: 20px;
  position: relative;

  @media (${({ theme }) => theme.media.small}) {
    font-size: 14px;
  }

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

    @media (${({ theme }) => theme.media.small}) {
      display: none;
    }
  }
`;

export const TypeWork = styled.p<StyledProps>`
  font-weight: 400;
  font-size: ${({ isDescComponent }) => (isDescComponent ? 20 : 16)}px;
  line-height: 20px;

  @media (${({ theme }) => theme.media.small}) {
    font-size: 14px;
  }
`;

export const InfoAddress = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-left: 28px;

  @media (${({ theme }) => theme.media.small}) {
    font-size: 14px;
    padding-left: 25px;
  }

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

export const Star = styled.button<StarProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 22px;
  background: url(${({ isFavorite }) => (isFavorite ? starActiveIcon : starIcon)}) no-repeat;
  cursor: ${({ theme }) => theme.cursor};
`;
