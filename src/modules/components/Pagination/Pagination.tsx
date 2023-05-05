import { StyledPagination } from './Pagination.styled';

interface PaginationProps {
  total: number;
  value: number;
  onChange: (value: number) => void;
}

export const Pagination = ({ total, value, onChange }: PaginationProps) => (
  <StyledPagination total={total} value={value} onChange={onChange} />
);
