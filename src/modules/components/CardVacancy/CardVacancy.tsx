import { getPayments } from 'utils/payments';
import { Wrapper, Descriptions, InfoAddress, Payment, Title, TypeWork } from './CardVacancy.styled';

interface CardVacancyProps {
  title: string;
  paymentFrom: number;
  paymentTo: number;
  type: string;
  address: string;
  currency: string;
}

export const CardVacancy = ({
  title,
  paymentFrom,
  paymentTo,
  type,
  address,
  currency,
}: CardVacancyProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Descriptions>
        <Payment>{getPayments(paymentFrom, paymentTo, currency)}</Payment>
        <TypeWork>{type}</TypeWork>
      </Descriptions>
      <InfoAddress>{address}</InfoAddress>
    </Wrapper>
  );
};
