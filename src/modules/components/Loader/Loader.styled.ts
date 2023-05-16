import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${({ theme }) => theme.order.mainIndex};
`;
