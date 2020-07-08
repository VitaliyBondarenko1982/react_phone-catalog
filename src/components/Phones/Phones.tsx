import React, { FC, useEffect, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PhonesWithDetails, State } from '../../utils/interfaces';
import {
  loadPhones as loadPhonesAction,
} from '../../store/actions';
import './Phones.scss';

interface StateProps {
  phones: PhonesWithDetails[];
}

interface DispatchProps {
  loadPhones: () => void;
}

const LazyPhoneCard = lazy(() => import('../PhoneCard/PhoneCard')
  .then(({ PhoneCard }) => ({ default: PhoneCard })));

const PhonesTemplate: FC<StateProps & DispatchProps> = ({
  phones,
  loadPhones,
}) => {
  useEffect(() => {
    loadPhones();
  }, [loadPhones]);

  return (
    <div className="phones__container">
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
          Phones
          <svg className="breadcrumbs__arrow" width="16" height="16">
            <use href="../../img/sprite.svg#chevron-icon" />
          </svg>
        </span>
      </div>
      <h2 className="phones__title title">Mobile phones</h2>
      <p className="phones__amount">
        {phones.length}
        {' '}
        models
      </p>
      <div className="phones__actions">
        <div className="phones__action">
          <p className="phones__action-title">Sort by</p>
          <div className="phones__action-field select">
            <span className="select__text">Price (from low to high)</span>
            <svg className="select__arrow" width="16" height="16">
              <use href="../../img/sprite.svg#chevron-icon" />
            </svg>
            <ul className="select__options">
              <li className="select__option">Price (from low to high)</li>
              <li className="select__option">Price (from high to low)</li>
              <li className="select__option">RAM</li>
              <li className="select__option">Capacity</li>
            </ul>
          </div>
        </div>
        <div className="phones__action">
          <p className="phones__action-title">Search</p>
          <label
            htmlFor="search"
            className="phones__action-label"
          >
            <input id="search" className="phones__action-field search" />
            <svg className="search__icon" width="16" height="16">
              <use href="../../img/sprite.svg#search-icon" />
            </svg>
          </label>
        </div>
      </div>
      <Suspense fallback={(
        <div className="phones__loader">
          <Loader
            type="TailSpin"
            color="#89939a"
            height={120}
            width={120}
          />
        </div>
      )}
      >
        <div className="phones__catalog">
          {phones.map(phone => (
            <LazyPhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
});

const mapDispatchToProps = {
  loadPhones: loadPhonesAction,
};

export const Phones = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(PhonesTemplate);
