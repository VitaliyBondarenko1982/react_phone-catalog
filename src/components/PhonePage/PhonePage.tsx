import React, { FC, useEffect, useState, useCallback, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory, RouteComponentProps } from 'react-router-dom';
import cx from 'classnames';
import { MAIN_URL } from '../../utils/api';
import { Details, State } from '../../utils/interfaces';
import { loadPhone as loadPhoneAction } from '../../store/actions';

import './PhonePage.scss';
import { ButtonAddToCart } from '../ButtonAddToCart';
import {ButtonAddToFavourite} from "../ButtonAddToFavourite";

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
            <ButtonAddToCart
              id={phoneDetails.id}
              price={phoneDetails.priceDiscount}
            />
            <ButtonAddToFavourite
              id={phoneDetails.id}
            />
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
          <ul className="phone__tech-list">
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Screen</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.screen}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Resolution</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.resolution}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Processor</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.processor}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">RAM</span>
              <span className="phone__tech-item-amount">
                {`${parseInt(phoneDetails.ram, 10)} GB`}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Built in memory</span>
              <span className="phone__tech-item-amount">
                {`${parseInt(phoneDetails.capacity, 10)} GB`}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Camera</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.camera}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Zoom</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.zoom}
              </span>
            </li>
            <li className="phone__tech-item">
              <span className="phone__tech-item-title">Cell</span>
              <span className="phone__tech-item-amount">
                {phoneDetails.cell.join(', ')}
              </span>
            </li>
          </ul>
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
