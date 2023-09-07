import { FC } from 'react';
import Slider from 'react-slick';
import { Phone } from '../../types';

import PhoneCard from '../PhoneCard';
import { Icons, PRODUCTS_SLIDER_SETTINGS } from '../../constants';
import { Heading, SliderArrow } from '../ui';
import { noop } from '../../utils';

import './pruductsSlider.scss';

interface Props {
  products: Phone[];
  title: string;
}
const ProductsSlider: FC<Props> = ({ products, title }) => {
  return (
    <div className="products-slider">
      <Heading title={title} className="products-slider__title" />
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
