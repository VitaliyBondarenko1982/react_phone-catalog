import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Phone } from '../../types';
import { AppRoutes, Icons } from '../../constants';
import { noop, normalizeProductValue } from '../../utils';
import { Button } from '../ui';

import './phoneCard.scss';

interface Props {
  phone: Phone;
}
const PhoneCard: FC<Props> = ({ phone }) => {
  const {
    phoneId,
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = phone;

  const phoneDetailsPath = `${AppRoutes.PHONES}/${phoneId}`;

  return (
    <div className="phone-card">
      <Link
        to={phoneDetailsPath}
        className="phone-card__link"
      >
        <img className="phone-card__image" src={image} alt={name} />
      </Link>
      <Link to={phoneDetailsPath} className="phone-card__name">
        {name}
      </Link>
      <div className="phone-card__price">
        <span className="phone-card__current-price">{`$${price}`}</span>
        <span className="phone-card__full-price">{`$${fullPrice}`}</span>
      </div>
      <ul className="phone-card__details-list">
        <li className="phone-card__details-item">
          <span className="phone-card__details-title">Screen</span>
          <span className="phone-card__details-value">{screen}</span>
        </li>
        <li className="phone-card__details-item">
          <span className="phone-card__details-title">
            Capacity
          </span>
          <span className="phone-card__details-value">
            {normalizeProductValue(capacity)}
          </span>
        </li>
        <li className="phone-card__details-item">
          <span className="phone-card__details-title">RAM</span>
          <span className="phone-card__details-value">
            {normalizeProductValue(ram)}
          </span>
        </li>
      </ul>
      <div className="phone-card__buttons">
        <Button
          onClick={noop}
          className="phone-card__add-to-card"
          title="Add to cart"
        />
        <Button
          onClick={noop}
          type="secondary"
          className="phone-card__add-to-favorite"
          icon={Icons.HEART}
        />
      </div>
    </div>
  );
};

export default PhoneCard;
