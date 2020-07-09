import React, { FC, useEffect, useState, useCallback, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory, RouteComponentProps } from 'react-router-dom';
import cx from 'classnames';
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

type props = RouteComponentProps<MatchParams> & StateProps & DispatchProps

const PhonePageTemplate: FC<props> = ({
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

  const history = useHistory();

  const loadPhoneByColor = useCallback(
    (color: string) => {
      if (phoneDetails) {
        const idArray = phoneDetails.id.split('-');

        idArray.pop();
        idArray.push(color);
        const newId = idArray.join('-');

        loadPhone(newId);
        setCurrentImage('');

        if (phoneDetails.id !== newId) {
          history.push(`/phones/${newId}`);
        }
      }
    }, [loadPhone, phoneDetails, history],
  );

  const loadPhoneByCapacity = useCallback(
    (capacity: string) => {
      if (phoneDetails) {
        const idArray = phoneDetails.id.split('-');

        idArray.splice(idArray.length - 2, 1, `${parseInt(capacity, 10)}gb`);
        const newId = idArray.join('-');

        loadPhone(newId);

        if (phoneDetails.id !== newId) {
          history.push(`/phones/${newId}`);
        }
      }
    }, [loadPhone, phoneDetails, history],
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
      <h2 className="phone__title title">{phoneDetails.name}</h2>
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
        <div className="phone__info">
          <div className="phone__colors">
            <h3 className="phone__colors-title">Available colors</h3>
            <ul className="phone__colors-list">
              {phoneDetails.colorsAvailable.map(color => (
                <div
                  key={color}
                  className={cx('phone__colors-item',
                    {
                      'phone__colors-item-active': color
                        .toLowerCase() === phoneDetails.color.toLowerCase(),
                    })}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: color }}
                    className="phone__colors-item-color"
                    onClick={() => loadPhoneByColor(color)}
                  />
                </div>
              ))}
            </ul>
          </div>
          <div className="phone__capacity">
            <h3 className="phone__capacity-title">Select capacity</h3>
            <ul className="phone__capacity-list">
              {phoneDetails.capacityAvailable.map(capacity => (
                <li key={capacity} className="phone__capacity-item">
                  <button
                    type="button"
                    className={cx('phone__capacity-item-btn', {
                      'phone__capacity-item-btn-active':
                        capacity === phoneDetails.capacity,
                    })}
                    onClick={() => loadPhoneByCapacity(capacity)}
                  >
                    {capacity}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="phone__price">
            <span className="phone__price-discount">
              $
              {phoneDetails.priceDiscount}
            </span>
            <span className="phone__price-regular">
              $
              {phoneDetails.priceRegular}
            </span>
          </div>
          <div className="phone__buttons">
            <button
              type="button"
              className="phone__button-to-cart"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="phone__button-to-favourite"
            >
              {/* eslint-disable-next-line max-len */}
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* eslint-disable-next-line max-len */}
                <path fillRule="evenodd" clipRule="evenodd" d="M9.62852 0.631367C10.1584 0.411794 10.7264 0.298779 11.3 0.298779C11.8737 0.298779 12.4416 0.411794 12.9716 0.631367C13.5015 0.850941 13.983 1.17277 14.3885 1.57847C14.7941 1.98393 15.1158 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66666C15.6679 5.24027 15.5549 5.80826 15.3353 6.33819C15.1158 6.86806 14.794 7.34948 14.3884 7.75497C14.3883 7.75501 14.3884 7.75493 14.3884 7.75497L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507 13.6483L1.61174 7.75497C0.792668 6.9359 0.33252 5.825 0.33252 4.66666C0.33252 3.50832 0.792668 2.39742 1.61174 1.57835C2.43081 0.759284 3.54171 0.299135 4.70005 0.299135C5.85839 0.299135 6.96928 0.759284 7.78835 1.57835L8.00005 1.79005L8.21162 1.57847C8.21166 1.57843 8.21158 1.57851 8.21162 1.57847C8.61711 1.17283 9.09865 0.85092 9.62852 0.631367ZM13.3983 2.56819C13.1228 2.29256 12.7957 2.07391 12.4357 1.92474C12.0756 1.77556 11.6898 1.69878 11.3 1.69878C10.9103 1.69878 10.5245 1.77556 10.1644 1.92474C9.80441 2.07391 9.4773 2.29256 9.2018 2.56819L8.49502 3.27497C8.22165 3.54834 7.77844 3.54834 7.50507 3.27497L6.7984 2.5683C6.24189 2.01178 5.48708 1.69914 4.70005 1.69914C3.91301 1.69914 3.15821 2.01178 2.60169 2.5683C2.04517 3.12482 1.73252 3.87962 1.73252 4.66666C1.73252 5.4537 2.04517 6.2085 2.60169 6.76502L8.00005 12.1634L13.3984 6.76502C13.674 6.48952 13.8928 6.1623 14.042 5.80228C14.1911 5.44225 14.2679 5.05637 14.2679 4.66666C14.2679 4.27696 14.1911 3.89107 14.042 3.53105C13.8928 3.17102 13.6739 2.84369 13.3983 2.56819Z" fill="#333333" />
              </svg>
            </button>
          </div>
          <ul className="phone__details-list">
            <li className="phone__details-item">
              <span className="phone__details-item-title">Screen</span>
              <span className="phone__details-item-amount">
                {phoneDetails.screen}
              </span>
            </li>
            <li className="phone__details-item">
              <span className="phone__details-item-title">Resolution</span>
              <span className="phone__details-item-amount">
                {phoneDetails.resolution}
              </span>
            </li>
            <li className="phone__details-item">
              <span className="phone__details-item-title">Processor</span>
              <span className="phone__details-item-amount">
                {phoneDetails.processor}
              </span>
            </li>
            <li className="phone__details-item">
              <span className="phone__details-item-title">RAM</span>
              <span className="phone__details-item-amount">
                {`${parseInt(phoneDetails.ram, 10)} GB`}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="phone__bottom">
        <div className="phone__about">
          <h3 className="phone__about-title">About</h3>
          <div className="phone__about-info">
            {phoneDetails.description.map(item => (
              <div key={item.title} className="phone__about-info-item">
                <h4 className="phone__about-info-title">
                  {item.title}
                </h4>
                {item.text.map(text => (
                  <p key={text} className="phone__about-info-text">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="phone__tech">
          <h3 className="phone__tech-title">Tech specs</h3>
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
