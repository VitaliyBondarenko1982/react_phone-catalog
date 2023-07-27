import { NavLink } from 'react-router-dom';
import { AppRoutes, Icons } from '../../constants';
import Icon from '../Icon';

import NavBar from '../NavBar';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to={AppRoutes.HOME} className="header__logo">
        <Icon iconId={Icons.LOGO} className="header__icon" />
      </NavLink>

      <NavBar />
    </header>
  );
};

export default Header;
