import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AVAILABLE_COLORS, Icons } from '../../../../constants';
import { CartContext } from '../../../../contexts/CartContext';
import { IProductDetails } from '../../../../types';
import { getProductLink, noop } from '../../../../utils';
import { Button } from '../../../ui';

import s from './Actions.module.scss';

interface Props {
  product: IProductDetails;
}

const Actions: FC<Props> = ({ product }) => {
  const {
    name,
    capacityAvailable,
    colorsAvailable,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    id,
    images,
  } = product;

  const infoItems = [
    {
      title: 'Screen',
      value: screen,
    },
    {
      title: 'Resolution',
      value: resolution,
    },
    {
      title: 'Processor',
      value: processor,
    },
    {
      title: 'Ram',
      value: ram,
    },
  ];

  const activeColor = id.split('-').pop();
  const { isItemInCart, addItem, removeItem } = useContext(CartContext);

  const isProductInCard = isItemInCart(id);
  const cartProduct = {
    id,
    name,
    image: images[0] || '',
    price: priceDiscount,
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.colors}>
          <span className={s.label}>Available colors</span>
          <ul className={s.list}>
            {colorsAvailable.map((color) => (
              <li className={s.item}>
                <Link
                  to={`/phones/${getProductLink({
                    id,
                    newPart: color,
                  })}`}
                  className={cn(s.colorsLink, {
                    [s.activeLink]: color === activeColor,
                  })}
                  style={{ backgroundColor: AVAILABLE_COLORS[color] || color }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={s.capacity}>
          <span className={s.label}>Select capacity</span>
          <ul className={s.list}>
            {capacityAvailable.map((capacityItem) => (
              <li className={s.item}>
                <Link
                  to={`/phones/${getProductLink({
                    id,
                    newPart: capacityItem.toLowerCase(),
                    index: -2,
                  })}`}
                >
                  <Button
                    title={capacityItem}
                    type={capacityItem === capacity ? 'primary' : 'secondary'}
                    className={cn(s.capacityButton, {
                      [s.capacityButtonActive]: capacityItem === capacity,
                    })}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.price}>
          <span>{`$${priceDiscount}`}</span>
          <span className={s.priceRegular}>{`$${priceRegular}`}</span>
        </div>
        <div className={s.actions}>
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
        <ul>
          {infoItems.map(({ title, value }) => (
            <li className={s.infoItem} key={value}>
              <span className={s.infoTitle}>{title}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Actions;
