import styled from 'styled-components';
import type { FlattenSimpleInterpolation } from 'styled-components';

interface StyledListProps {
  styles: FlattenSimpleInterpolation;
}

export const StyledList = styled.ul<StyledListProps>`
  ${({ styles }) => styles}
`;
