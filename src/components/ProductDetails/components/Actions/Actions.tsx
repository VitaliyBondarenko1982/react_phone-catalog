import React, { FC } from 'react';

import s from './Actions.module.scss';

interface Props {
  capacityAvailable: string[];
  colorsAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
}

const Actions: FC<Props> = ({
  colorsAvailable,
  capacityAvailable,
  priceDiscount,
  priceRegular,
  screen,
  resolution,
  processor,
  ram,
}) => {
  return (
    <div className={s.container}>
      <div>{colorsAvailable}</div>
      <div>{capacityAvailable}</div>
      <div>{priceDiscount}</div>
      <div>{priceRegular}</div>
      <div>{screen}</div>
      <div>{resolution}</div>
      <div>{processor}</div>
      <div>{ram}</div>
    </div>
  );
};

export default Actions;
