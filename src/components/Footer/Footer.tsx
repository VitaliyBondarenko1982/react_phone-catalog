import React from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink
          to="/"
          className="footer__logo"
          exact
        >
          Phone
          <span>catalog</span>
        </NavLink>
        <div className="footer__links">
          <a
            href="https://github.com/VitaliyBondarenko1982"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacts
          </a>
        </div>
        <div className="footer__on-top">
          <p className="footer__on-top-text">Back to top</p>
          <button
            className="footer__on-top-button"
            type="button"
            onClick={scrollToTop}
          />
        </div>
      </div>
    </footer>
  );
};
