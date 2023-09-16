import React, { FC } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import { PRODUCT_DETAILS_IMAGES_SLIDER_SETTINGS } from '../../../../constants';
import { getFullPath } from '../../../../utils';

import './slickSlider.scss';
import s from './Images.module.scss';

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  const renderDots = (i: number) => {
    return (
      <img src={getFullPath(images[i])} className={s.dot} alt={images[i]} />
    );
  };

  return (
    <Slider
      {...PRODUCT_DETAILS_IMAGES_SLIDER_SETTINGS}
      customPaging={renderDots}
      className={cn(s.container, '__app-Images-bigImageSlider')}
    >
      {images.map((image) => (
        <div className={s.slide} key={image}>
          <img src={getFullPath(image)} alt={image} className={s.image} />
        </div>
      ))}
    </Slider>
  );
};

export default Images;
