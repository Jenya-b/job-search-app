import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Wrapper } from './Layout.styled';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Outlet />
  </Wrapper>
);
