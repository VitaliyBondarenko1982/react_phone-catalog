import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <NavLink
          to="/"
          className="header__logo"
          exact
        >
          <p>
            Phone
            <span>catalog</span>
          </p>
        </NavLink>
      </div>
      <NavBar />
    </header>
  );
};
