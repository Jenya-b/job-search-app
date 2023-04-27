import { NavLink } from 'react-router-dom';

import { logo } from 'constants/images';
import { menu } from 'constants/menu';
import { StyledHeader, Wrapper, Logo, listStyles } from './Header.styled';
import { List } from '../List/List';
import type { IMenu } from 'interfaces/menu';

export const Header = () => {
  const renderItem = ({ title, href }: IMenu) => <NavLink to={href}>{title}</NavLink>;

  return (
    <StyledHeader>
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo" />
          <p>Jobored</p>
        </Logo>
        <nav>
          <List data={menu} renderEmpty={<></>} renderItem={renderItem} styles={listStyles} />
        </nav>
      </Wrapper>
    </StyledHeader>
  );
};
