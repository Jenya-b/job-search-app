import styled, { css } from 'styled-components';

import { fontStylesRegular } from 'styles/typography';
import { colors } from 'constants/colors';

export const StyledHeader = styled.header`
  display: grid;
  grid-template: 100% / ${({ theme }) => theme.size.container.width};
  background: ${({ theme }) => theme.colors.backgroundBase};
`;

export const Wrapper = styled.div`
  grid-column: 2/3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  column-gap: 12px;

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

export const listStyles = css`
  display: flex;
  column-gap: 60px;

  a {
    ${fontStylesRegular}
    color: ${colors.black};

    &.active {
      color: ${colors.blue500Main};
      font-weight: 500;
    }
  }
`;
