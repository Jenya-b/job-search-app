import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 15px 44px 15px;
  display: grid;
  grid-template: 1fr / ${({ theme }) => theme.size.container.width};

  @media (${({ theme }) => theme.media.medium}) {
    padding-top: 30px;
  }

  @media (${({ theme }) => theme.media.small}) {
    padding: 15px 10px 30px 10px;
  }
`;

export const Container = styled.div`
  grid-column: 2/3;
  justify-self: center;
  max-width: 773px;
  width: 100%;
`;
