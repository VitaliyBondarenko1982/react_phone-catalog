import { NavLink } from 'react-router-dom';
import { AppRoutes, Icons } from '../../constants';
import { Icon } from '../ui';

import './logo.scss';

const Logo = () => {
  return (
    <NavLink to={AppRoutes.HOME} className="logo __app-logo">
      <Icon iconId={Icons.LOGO} />
    </NavLink>
  );
};

export default Logo;
