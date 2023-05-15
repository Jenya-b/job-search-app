import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 0 44px 0;
  display: grid;
  grid-template: 1fr / ${({ theme }) => theme.size.container.width};
`;

export const Container = styled.div`
  grid-column: 2/3;
  justify-self: center;
  max-width: 773px;
  width: 100%;
`;
