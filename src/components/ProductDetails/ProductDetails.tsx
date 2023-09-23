import React, { FC } from 'react';

import { IProductDetails } from '../../types';
import { Heading } from '../ui';
import { Actions, Description, Images } from './components';

import s from './ProductDetails.module.scss';

interface Props {
  product: IProductDetails;
}
const ProductDetails: FC<Props> = ({ product }) => (
  <div className={s.container}>
    <Heading title={product.name} className={s.title} />
    <div className={s.grid}>
      <Images images={product.images} />
      <Actions product={product} />
      <Description product={product} />
    </div>
  </div>
);

export default ProductDetails;
