import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template: auto 1fr / 315px 1fr;
  column-gap: 28px;

  @media (${({ theme }) => theme.media.large}) {
    grid-template: auto 1fr / 265px 1fr;
    column-gap: 20px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    grid-template-columns: 1fr;
    row-gap: 15px;
    column-gap: 0px;
  }

  div:first-child {
    grid-row: 1/3;
  }
`;
