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
import { path } from 'modules/router/path';

interface CardVacancyProps {
  title: string;
  paymentFrom: number;
  paymentTo: number;
  type: string;
  address: string;
  currency: string;
  id: number;
  addFavorites: () => void;
  isFavorite: boolean;
  isDescComponent: boolean;
}

export const CardVacancy = ({
  title,
  paymentFrom,
  paymentTo,
  type,
  address,
  currency,
  id,
  addFavorites,
  isFavorite,
  isDescComponent,
}: CardVacancyProps) => {
  return (
    <Wrapper>
      <Title isDescComponent={isDescComponent} to={`${path.vacancy}/${id}`}>
        {title}
      </Title>
      <Descriptions>
        <Payment isDescComponent={isDescComponent}>
          {getPayments(paymentFrom, paymentTo, currency)}
        </Payment>
        <TypeWork isDescComponent={isDescComponent}>{type}</TypeWork>
      </Descriptions>
      <InfoAddress>{address}</InfoAddress>
      <Star isFavorite={isFavorite} onClick={addFavorites} />
    </Wrapper>
  );
};
