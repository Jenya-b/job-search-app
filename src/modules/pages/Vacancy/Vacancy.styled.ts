import styled from 'styled-components';

import { fragmentCardBlock } from 'styles/fragments';

export const Wrapper = styled.div`
  ${fragmentCardBlock}

  &:last-child {
    margin-top: 20px;

    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }

    ul {
      margin-top: 16px;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      li {
        list-style: disc;
        margin-left: 23px;
      }
    }
  }
`;
