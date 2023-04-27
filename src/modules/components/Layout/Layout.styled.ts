import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: ${({ theme }) => theme.size.header.height}px 1fr / 1fr;
`;
