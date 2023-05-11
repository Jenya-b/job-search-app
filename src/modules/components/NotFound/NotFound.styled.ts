import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  row-gap: 32px;
`;

export const ImageWrapp = styled.div`
  text-align: center;
  max-width: 240px;
  width: 100%;
  height: 230px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  padding: 10px 24px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borders.controls.borderRadius}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 14px;
  line-height: 155%;
`;
