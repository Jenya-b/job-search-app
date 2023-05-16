import { NavLink } from 'react-router-dom';

import { logo } from 'constants/images';
import { menu } from 'constants/menu';
import { StyledHeader, Wrapper, Logo, NavMenu, Burger, listStyles } from './Header.styled';
import { List } from '../List/List';
import { useAppDispatch, useAppSelector } from 'store';
import { menuSelector } from 'store/selectors';
import { setActiveMenu } from 'store/reducers/menuSlice';
import type { IMenu } from 'interfaces/menu';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isActiveMenu } = useAppSelector(menuSelector);

  const renderItem = ({ title, href }: IMenu) => (
    <NavLink to={href} onClick={() => dispatch(setActiveMenu(false))}>
      {title}
    </NavLink>
  );

  const openMenu = () => {
    dispatch(setActiveMenu(!isActiveMenu));
  };

  return (
    <StyledHeader>
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo" />
          <p>Jobored</p>
        </Logo>
        <NavMenu isActiveBurger={isActiveMenu}>
          <List data={menu} renderEmpty={<></>} renderItem={renderItem} styles={listStyles} />
        </NavMenu>
        <Burger isActiveBurger={isActiveMenu} onClick={openMenu}>
          <span></span>
        </Burger>
      </Wrapper>
    </StyledHeader>
  );
};
