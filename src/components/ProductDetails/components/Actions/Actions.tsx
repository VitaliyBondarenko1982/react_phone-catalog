import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AVAILABLE_COLORS, Icons } from '../../../../constants';
import { getProductLink, noop } from '../../../../utils';
import { Button } from '../../../ui';

import s from './Actions.module.scss';

interface Props {
  capacityAvailable: string[];
  colorsAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  resolution: string;
  processor: string;
  ram: string;
  id: string;
}

const Actions: FC<Props> = ({
  colorsAvailable,
  capacityAvailable,
  priceDiscount,
  priceRegular,
  screen,
  resolution,
  processor,
  capacity,
  ram,
  id,
}) => {
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
          <Button onClick={noop} className={s.addToCard} title="Add to cart" />
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
