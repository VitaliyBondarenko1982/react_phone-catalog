import { NavLink } from 'react-router-dom';
import { AppRoutes, Icons } from '../../constants';
import { Icon } from '../ui';

import s from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to={AppRoutes.HOME} className={s.container}>
      <Icon iconId={Icons.LOGO} className={s.icon} />
    </NavLink>
  );
};

export default Logo;
