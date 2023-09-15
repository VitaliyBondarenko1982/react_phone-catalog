import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import {
  ENABLE_SEARCH_ROUTES,
  NAV_MAIN_LINKS,
  NAV_SIDE_LINKS,
} from '../../constants';
import { useCheckOnRoute } from '../../hooks';
import Search from '../Search';
import { Icon } from '../ui';

import s from './NavBar.module.scss';

const NavBar = () => {
  const isSearchVisible = useCheckOnRoute(ENABLE_SEARCH_ROUTES);

  return (
    <nav className={s.container}>
      <ul className={s.mainList}>
        {NAV_MAIN_LINKS.map(({ to, title }) => (
          <li className={s.mainItem} key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => {
                return cn(s.mainLink, {
                  [s.isActive]: isActive,
                });
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={s.sideWrapper}>
        {isSearchVisible && <Search />}
        <ul className={s.sideList}>
          {NAV_SIDE_LINKS.map(({ to, icon }) => (
            <li className={s.sideItem} key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => {
                  return cn(s.sideLink, {
                    [s.isActive]: isActive,
                  });
                }}
              >
                <Icon iconId={icon} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
