import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="nav header__hav">
      <div className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link--active"
          exact
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/phones"
          className="nav__link"
          activeClassName="nav__link--active"
          exact
        >
          <span>Phones</span>
        </NavLink>
      </div>
      <div className="actions nav__actions">
        <NavLink
          to="/favorites"
          className="nav__action action__favorites"
          activeClassName="action__favorites--active"
        >
          <svg className="action__icon" width="16" height="16">
            <use href="../../img/sprite.svg#heart-icon" />
          </svg>
        </NavLink>
        <NavLink
          to="/cart"
          className="nav__action action__cart"
          activeClassName="action__cart--active"
        >
          <svg className="action__icon" width="16" height="16">
            <use href="../../img/sprite.svg#cart-icon" />
          </svg>
        </NavLink>
      </div>
    </nav>
  );
};
