import { mapIcon } from 'constants/images';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Descriptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 33px;
`;

export const Payment = styled.p`
  font-weight: 600;
  font-size: 16px;
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

export const TypeWork = styled.p`
  font-weight: 400;
  font-size: 16px;
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
    left: 3px;
  }
`;
