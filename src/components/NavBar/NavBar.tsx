import React, {FC} from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from '../../utils/interfaces';
import './NavBar.scss';

interface StateProps {
  totalAmount: number;
  favouritesProducts: string[];
}

const NavBarTemplate: FC<StateProps> = ({
  totalAmount,
  favouritesProducts,
}) => {
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
          to="/phones/"
          className="nav__link"
          activeClassName="nav__link--active"
          exact
        >
          <span>Phones</span>
        </NavLink>
      </div>
      <div className="actions nav__actions">
        <NavLink
          to="/favourites/"
          className="nav__action action__favorites"
          activeClassName="action__favorites--active"
        >
          <svg className="action__icon" width="16" height="16">
            <use href="img/sprite.svg#heart-icon" />
          </svg>
          <div className={cx('action__cart-amount', {
            hidden: !favouritesProducts.length,
          })}
          >
            <span>{favouritesProducts.length}</span>
          </div>
        </NavLink>
        <NavLink
          to="/cart"
          className="nav__action action__cart"
          activeClassName="action__cart--active"
        >
          <svg className="action__icon" width="16" height="16">
            <use href="img/sprite.svg#cart-icon" />
          </svg>
          <div className={cx('action__cart-amount', {
            hidden: !totalAmount,
          })}
          >
            <span>{totalAmount}</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: State) => ({
  totalAmount: state.totalAmount,
  favouritesProducts: state.favouritesProducts,
});

export const NavBar = connect<StateProps, null, {}, State>(
  mapStateToProps,
)(NavBarTemplate);
