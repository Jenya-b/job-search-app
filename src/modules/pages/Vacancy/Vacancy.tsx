import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NotFound } from 'modules/components/NotFound/NotFound';
import { useGetOneVacancyQuery } from 'services';
import { Main, Container } from 'styles/components';
import { CardVacancy } from 'modules/components/CardVacancy/CardVacancy';
import { useAppDispatch, useAppSelector } from 'store';
import { vacancySelector } from 'store/selectors';
import { updateFavoritesVacancy } from 'store/reducers/vacancySlice';
import { Wrapper } from './Vacancy.styled';
import { Loader } from 'modules/components/Loader/Loader';

export const Vacancy = () => {
  const { vacancyId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { favoritesVacancy } = useAppSelector(vacancySelector);
  const { data, isSuccess, isLoading } = useGetOneVacancyQuery(vacancyId ?? '');

  useEffect(() => {
    if (!data) return;
    setIsFavorite(favoritesVacancy.map(({ id }) => id).includes(data.id));
  }, [data, favoritesVacancy, isSuccess]);

  const addFavorites = () => {
    if (!data) return;
    isFavorite
      ? dispatch(updateFavoritesVacancy(favoritesVacancy.filter(({ id }) => id != data.id)))
      : dispatch(updateFavoritesVacancy([data, ...favoritesVacancy]));
  };

  const createMarkup = (element: string) => ({ __html: element });

  if (isLoading) return <Loader />;

  if (!data) return <NotFound />;

  return (
    <Main>
      <Container>
        <Wrapper>
          <CardVacancy
            title={data.profession}
            paymentFrom={data.payment_from}
            paymentTo={data.payment_to}
            address={data.town.title}
            type={data.type_of_work.title}
            currency={data.currency}
            id={data.id}
            addFavorites={addFavorites}
            isFavorite={isFavorite}
            isDescComponent={true}
          />
        </Wrapper>
        <Wrapper dangerouslySetInnerHTML={createMarkup(data.vacancyRichText)}></Wrapper>
      </Container>
    </Main>
  );
};

export default Vacancy;
