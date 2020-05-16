import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <NavLink
          to="/"
          className="header__logo"
          exact
        >
          Phone
          <span>catalog</span>
        </NavLink>
      </div>
      <NavBar />
    </header>
  );
};
