import { Wrapper, Descriptions, InfoAddress, Payment, Title, TypeWork } from './CardVacancy.styled';

interface CardVacancyProps {
  title: string;
  salary: number;
  type: string;
  address: string;
  currency: string;
}

export const CardVacancy = ({ title, salary, type, address, currency }: CardVacancyProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Descriptions>
        <Payment>{`з/п от ${salary} ${currency}`}</Payment>
        <TypeWork>{type}</TypeWork>
      </Descriptions>
      <InfoAddress>{address}</InfoAddress>
    </Wrapper>
  );
};
