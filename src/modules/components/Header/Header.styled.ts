import styled, { css } from 'styled-components';

import { fontStylesRegular } from 'styles/typography';
import { colors } from 'constants/colors';
import { theme } from 'styles/theme';

interface BurgerProps {
  isActiveBurger: boolean;
}

export const StyledHeader = styled.header`
  display: grid;
  grid-template: 100% / ${({ theme }) => theme.size.container.width};
  background: ${({ theme }) => theme.colors.backgroundBase};
  padding: 0 20px;
`;

export const Wrapper = styled.div`
  grid-column: 2/3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.media.large}) {
    position: static;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  column-gap: 12px;

  @media (${({ theme }) => theme.media.large}) {
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(0);
    z-index: ${({ theme }) => theme.order.firstIndex};
  }

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.02em;
  }
`;

export const NavMenu = styled.nav<BurgerProps>`
  @media (${({ theme }) => theme.media.medium}) {
    position: absolute;
    top: ${({ isActiveBurger }) => (isActiveBurger ? 0 : '-100vh')};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    left: 0;
    width: 100%;
    transition: all 0.5s;
    z-index: ${({ theme }) => theme.order.mediumIndex};
  }
`;

export const Burger = styled.div<BurgerProps>`
  display: none;
  height: 23px;
  width: 35px;
  align-items: center;
  position: relative;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    z-index: ${({ theme }) => theme.order.firstIndex};
  }

  span {
    display: ${({ isActiveBurger }) => (isActiveBurger ? 'none' : 'block')};
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    left: 0;
    transition: all 0.1s;
  }

  &::after {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? 45 : 0)}deg);
    bottom: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }

  &::before {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? -45 : 0)}deg);
    top: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }
`;

export const listStyles = css`
  display: flex;
  column-gap: 60px;

  @media (${theme.media.medium}) {
    flex-direction: column;
    column-gap: 0px;
    row-gap: 10px;
    padding: 80px 0 40px 0;
  }

  li {
    @media (${theme.media.medium}) {
      align-self: center;
    }
  }

  a {
    ${fontStylesRegular}
    color: ${colors.black};

    &.active {
      color: ${colors.blue500Main};
      font-weight: 500;
    }
  }
`;
