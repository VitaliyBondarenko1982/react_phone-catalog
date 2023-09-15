import { FC } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import { Icons, PRODUCTS_SLIDER_SETTINGS } from '../../constants';
import { Product } from '../../types';
import { noop } from '../../utils';
import PhoneCard from '../PhoneCard';
import { Heading, SliderArrow } from '../ui';

import './slickSlider.scss';
import s from './ProductsSlider.module.scss';

interface Props {
  products: Product[];
  title: string;
}
const ProductsSlider: FC<Props> = ({ products, title }) => {
  return (
    <div className={cn(s.container, '__app-ProductsSlider-container')}>
      <Heading title={title} className={s.title} />
      <Slider
        {...PRODUCTS_SLIDER_SETTINGS}
        prevArrow={
          <SliderArrow onClick={noop} icon={Icons.ARROW_LEFT} className="" />
        }
        nextArrow={
          <SliderArrow onClick={noop} icon={Icons.ARROW_RIGHT} className="" />
        }
      >
        {products.map((phone) => (
          <PhoneCard phone={phone} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
