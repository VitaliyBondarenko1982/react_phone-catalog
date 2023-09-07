import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { NAV_MAIN_LINKS, NAV_SIDE_LINKS } from '../../constants';
import { Icon } from '../ui';

import './navbar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__main-list">
        {NAV_MAIN_LINKS.map(({ to, title }) => (
          <li className="navbar__main-item">
            <NavLink
              to={to}
              className={({ isActive }) => cn('navbar__main-link', {
                'is-active': isActive,
              })}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="navbar__side-list">
        {NAV_SIDE_LINKS.map(({ to, icon }) => (
          <li className="navbar__side-item">
            <NavLink
              to={to}
              className={({ isActive }) => cn('navbar__side-link', {
                'is-active': isActive,
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
