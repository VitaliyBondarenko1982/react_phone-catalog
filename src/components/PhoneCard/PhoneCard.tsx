import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AppRoutes, Icons } from '../../constants';
import { CartContext } from '../../contexts/CartContext';
import { IProduct } from '../../types';
import { getFullPath, noop, normalizeProductValue } from '../../utils';
import { Button } from '../ui';

import s from './PhoneCard.module.scss';

interface Props {
  phone: IProduct;
}
const PhoneCard: FC<Props> = ({ phone }) => {
  const { phoneId, image, name, price, fullPrice, screen, capacity, ram, id } =
    phone;

  const phoneDetailsPath = `${AppRoutes.PHONES}/${phoneId}`;

  const { isItemInCart, addItem, removeItem } = useContext(CartContext);

  const isProductInCard = isItemInCart(id);
  const cartProduct = {
    id,
    name,
    image,
    price,
  };

  return (
    <div
      className={cn(s.container, '__app-PhoneCard-container')}
      data-cy="cardsContainer"
    >
      <Link to={phoneDetailsPath} className={s.link}>
        <img className={s.image} src={getFullPath(image)} alt={name} />
      </Link>
      <Link to={phoneDetailsPath} className={s.name}>
        {name}
      </Link>
      <div className={s.price}>
        <span className={s.currentPrice}>{`$${price}`}</span>
        <span className={s.fullPrice}>{`$${fullPrice}`}</span>
      </div>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>Screen</span>
          <span>{screen}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>Capacity</span>
          <span>{normalizeProductValue(capacity)}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>RAM</span>
          <span>{normalizeProductValue(ram)}</span>
        </li>
      </ul>
      <div className={s.buttons}>
        <Button
          onClick={isProductInCard ? removeItem(id) : addItem(cartProduct)}
          isSelected={isProductInCard}
          className={s.addToCard}
          title={isProductInCard ? 'Added to cart' : 'Add to cart'}
        />
        <Button
          onClick={noop}
          type="secondary"
          className={s.addToFavorite}
          icon={Icons.HEART}
        />
      </div>
    </div>
  );
};

export default PhoneCard;
