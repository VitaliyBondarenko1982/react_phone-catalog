import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import {
  AppRoutes,
  ENABLE_SEARCH_ROUTES,
  NAV_MAIN_LINKS,
  NAV_SIDE_LINKS,
} from '../../constants';
import { CartContext } from '../../contexts/CartContext';
import { useCheckOnRoute } from '../../hooks';
import Search from '../Search';
import { Icon } from '../ui';

import s from './NavBar.module.scss';

const NavBar = () => {
  const isSearchVisible = useCheckOnRoute(ENABLE_SEARCH_ROUTES);
  const { totalCartCount } = useContext(CartContext);

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
                <div className={s.iconWrapper}>
                  <Icon iconId={icon} />
                  {to === AppRoutes.CART && totalCartCount && (
                    <div
                      className={cn(s.count, {
                        [s.countMoreThenTen]: totalCartCount >= 10,
                        [s.countMoreThenThousand]: totalCartCount >= 100,
                      })}
                    >
                      {totalCartCount}
                    </div>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
