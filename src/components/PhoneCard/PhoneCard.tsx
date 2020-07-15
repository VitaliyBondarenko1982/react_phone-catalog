import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_URL } from '../../utils/api';
import { PhonesWithDetails } from '../../utils/interfaces';

import './PhoneCard.scss';
import { ButtonAddToCart } from '../ButtonAddToCart';
import {ButtonAddToFavourite} from "../ButtonAddToFavourite";

interface Props {
  phone: PhonesWithDetails;
}

export const PhoneCard: FC<Props> = ({ phone}) => (
  <div className="card">
    <NavLink
      to={`/phones/${phone.phoneId}`}
      exact
    >
      <img
        src={`${MAIN_URL}${phone.image}`}
        alt={phone.name}
        className="card__image"
      />
    </NavLink>
    <NavLink
      to={`/phones/${phone.phoneId}`}
      exact
      className="card__title"
    >
      {phone.name}
    </NavLink>
    <div className="card__price">
      <span className="card__price-discount">
        $
        {phone.priceDiscount}
      </span>
      <span className="card__price-regular">
        $
        {phone.priceRegular}
      </span>
    </div>
    <ul className="card__details-list">
      <li className="card__details-item">
        <span className="card__details-item-text">Screen</span>
        <span className="card__details-item-amount">
          {phone.screen}
        </span>
      </li>
      <li className="card__details-item">
        <span className="card__details-item-text">Capacity</span>
        <span className="card__details-item-amount">
          {`${parseFloat(phone.capacity)} ${phone.capacity.slice(-2)}`}
        </span>
      </li>
      <li className="card__details-item">
        <span className="card__details-item-text">Ram</span>
        <span className="card__details-item-amount">
          {`${parseFloat(phone.ram)} ${phone.ram.slice(-2)}`}
        </span>
      </li>
    </ul>
    <div className="card__buttons">
      <ButtonAddToCart id={phone.phoneId} price={phone.priceDiscount} />
      <ButtonAddToFavourite id={phone.phoneId}/>
    </div>
  </div>
);
