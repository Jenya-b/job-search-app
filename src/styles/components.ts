import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template: 1fr / ${({ theme }) => theme.size.container.width};
`;
