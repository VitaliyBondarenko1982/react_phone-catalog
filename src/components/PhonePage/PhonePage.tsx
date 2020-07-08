import React, { FC, useEffect, useState, useCallback, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory, RouteComponentProps } from 'react-router-dom';
import { MAIN_URL } from '../../utils/api';
import { Details, State } from '../../utils/interfaces';
import { loadPhone as loadPhoneAction } from '../../store/actions';

import './PhonePage.scss';

interface MatchParams {
  phoneId: string;
}

interface StateProps {
  phoneDetails: Details | null;
  phoneError: boolean;
}

interface DispatchProps {
  loadPhone: (value: string) => void;
}

const PhonePageTemplate: FC<RouteComponentProps<MatchParams> & StateProps & DispatchProps> = ({
  phoneDetails,
  loadPhone,
  match,
  phoneError,
}) => {
  const { phoneId } = match.params;
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    loadPhone(phoneId);
  }, [loadPhone, phoneId]);

  const selectCurrentImage = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, image: string) => {
      event.preventDefault();

      setCurrentImage(`${MAIN_URL}${image}`);
    },
    [],
  );

  if (phoneError || !phoneDetails) {
    return (
      <>
        <div className="phones__not-found">Phone not found</div>
      </>
    );
  }

  return (
    <div className="phone__container">
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
        <NavLink
          to="/phones"
        >
          <span className="breadcrumbs__page">
            Phones
            <svg className="breadcrumbs__arrow" width="16" height="16">
              <use href="../../img/sprite.svg#chevron-icon" />
            </svg>
          </span>
        </NavLink>

        <span
          className="breadcrumbs__page breadcrumbs__page--current"
        >
          {phoneDetails.name}
          <svg className="breadcrumbs__arrow" width="16" height="16">
            <use href="../../img/sprite.svg#chevron-icon" />
          </svg>
        </span>
      </div>
      <h2 className="phones__title title">{phoneDetails.name}</h2>
      <div className="phone__top">
        <div className="phone__gallery">
          <ul className="phone__gallery-list">
            {phoneDetails.images.map(image => (
              <li key={image} className="phone__gallery-item">
                <a
                  href="/"
                  className="phone__gallery-link"
                  onClick={(event) => selectCurrentImage(event, image)}
                >
                  <img
                    src={`${MAIN_URL}${image}`}
                    alt={image}
                    className="phone__gallery-image"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="phone__gallery-big-image-wrap">
            <img
              className="phone__gallery-big-image"
              alt="current"
              src={currentImage || `${MAIN_URL}${phoneDetails.images[0]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phoneDetails: state.phoneDetails,
  phoneError: state.phoneError,
});

const mapDispatchToProps = {
  loadPhone: loadPhoneAction,
};

export const PhonePage = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(PhonePageTemplate);
