import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { NAV_MAIN_LINKS, NAV_SIDE_LINKS } from '../../constants';
import { Icon } from '../ui';

import s from './NavBar.module.scss';

// eslint-disable-next-line no-console
console.log(s);

const NavBar = () => {
  return (
    <nav className={s.container}>
      <ul className={s.mainList}>
        {NAV_MAIN_LINKS.map(({ to, title }) => (
          <li className={s.mainItem}>
            <NavLink
              to={to}
              className={({ isActive }) => cn(s.mainLink, {
                [s.isActive]: isActive,
              })}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className={s.sideList}>
        {NAV_SIDE_LINKS.map(({ to, icon }) => (
          <li className={s.sideItem}>
            <NavLink
              to={to}
              className={({ isActive }) => cn(s.sideLink, {
                [s.isActive]: isActive,
              })}
            >
              <Icon iconId={icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
