import { notFound } from 'constants/images';
import { Wrapper, Link, ImageWrapp, Title } from './NotFound.styled';
import { path } from 'modules/router/path';

export const NotFound = () => (
  <Wrapper>
    <ImageWrapp>
      <img src={notFound} alt="not found" />
    </ImageWrapp>
    <Title>Упс, здесь еще ничего нет!</Title>
    <Link to={path.home}>Поиск Вакансий</Link>
  </Wrapper>
);
