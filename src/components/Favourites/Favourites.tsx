import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PhonesWithDetails, State } from '../../utils/interfaces';
import { PhoneCard } from '../PhoneCard';
import './Favourites.scss';

interface StateProps {
  phones: PhonesWithDetails[];
  favouritesProducts: string[];
}

const FavouritesTemplate: FC<StateProps> = ({
  phones,
  favouritesProducts,
}) => {
  const favoritesProductsList = useMemo(() => {
    return phones.filter(phone => favouritesProducts.includes(phone.phoneId));
  }, [phones, favouritesProducts]);

  return (
    <div className="favourites favourites__container">
      <div className="breadcrumbs">
        <NavLink
          to="/"
          className="breadcrumbs__home"
          exact
        >
          <svg className="breadcrumbs__icon" width="16" height="16">
            <use href="../../img/sprite.svg#home-icon" />
          </svg>
        </NavLink>
        <span
          className="breadcrumbs__page breadcrumbs__page--current"
        >
          Favourites
          <svg className="breadcrumbs__arrow" width="16" height="16">
            <use href="../../img/sprite.svg#chevron-icon" />
          </svg>
        </span>
      </div>
      <h2 className="favourites__title title">Favourites</h2>
      <p className="favourites__amount">
        {`${favoritesProductsList.length} items`}
      </p>
      <div className="phones__catalog">
        {favoritesProductsList.map((phone: PhonesWithDetails) => (
          <PhoneCard phone={phone} key={phone.phoneId} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
  favouritesProducts: state.favouritesProducts,
});

export const Favourites = connect<StateProps, null, {}, State>(
  mapStateToProps, null,
)(FavouritesTemplate);
