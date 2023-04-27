import type { FlattenSimpleInterpolation } from 'styled-components';

import { StyledList } from './List.styled';

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  renderEmpty: JSX.Element;
  styles: FlattenSimpleInterpolation;
}

export const List = <T,>({ data = [], renderItem, renderEmpty, styles }: ListProps<T>) => {
  if (!data.length) return renderEmpty;

  return (
    <StyledList styles={styles}>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </StyledList>
  );
};
