import React, { FC } from 'react';

import { IProductDetails } from '../../types';
import { Heading } from '../ui';
import { Actions, Description, Images } from './components';

import s from './ProductDetails.module.scss';

interface Props {
  product: IProductDetails;
}
const ProductDetails: FC<Props> = ({ product }) => {
  // eslint-disable-next-line no-console
  console.log(product);

  const {
    images,
    description,
    capacityAvailable,
    colorsAvailable,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    processor,
    ram,
    camera,
    capacity,
    zoom,
    cell,
  } = product;

  return (
    <div className={s.container}>
      <Heading title={product.name} className={s.title} />
      <div className={s.grid}>
        <Images images={images} />
        <Actions
          capacityAvailable={capacityAvailable}
          colorsAvailable={colorsAvailable}
          priceDiscount={priceDiscount}
          priceRegular={priceRegular}
          screen={screen}
          resolution={resolution}
          processor={processor}
          ram={ram}
        />
        <Description
          description={description}
          screen={screen}
          resolution={resolution}
          processor={processor}
          ram={ram}
          camera={camera}
          capacity={capacity}
          zoom={zoom}
          cell={cell}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
