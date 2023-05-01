import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 0 44px 0;
  display: grid;
  grid-template: 1fr / ${({ theme }) => theme.size.container.width};
`;
