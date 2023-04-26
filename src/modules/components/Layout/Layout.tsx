import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <header>
      <NavLink to={'/'}>Поиск вакансий</NavLink>
      <NavLink to={'/selected-jobs'}>Избранные</NavLink>
    </header>
    <Outlet />
  </>
);
