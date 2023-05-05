import { getPayments } from 'utils/payments';
import {
  Wrapper,
  Descriptions,
  InfoAddress,
  Payment,
  Title,
  TypeWork,
  Star,
} from './CardVacancy.styled';

interface CardVacancyProps {
  title: string;
  paymentFrom: number;
  paymentTo: number;
  type: string;
  address: string;
  currency: string;
  addFavorites: () => void;
  isFavorite: boolean;
}

export const CardVacancy = ({
  title,
  paymentFrom,
  paymentTo,
  type,
  address,
  currency,
  addFavorites,
  isFavorite,
}: CardVacancyProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Descriptions>
        <Payment>{getPayments(paymentFrom, paymentTo, currency)}</Payment>
        <TypeWork>{type}</TypeWork>
      </Descriptions>
      <InfoAddress>{address}</InfoAddress>
      <Star isFavorite={isFavorite} onClick={addFavorites} />
    </Wrapper>
  );
};
