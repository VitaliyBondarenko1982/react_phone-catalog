import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './SimpleSlider.scss';

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider__item">
          <img
            className="slider__image"
            src="./img/banner.jpg"
            alt="slider"
          />
        </div>
        <div className="slider__item">
          <img
            className="slider__image"
            src="./img/banner-2.jpg"
            alt="slider"
          />
        </div>
        <div className="slider__item">
          <img
            className="slider__image"
            src="./img/banner-3.jpg"
            alt="slider"
          />
        </div>
      </Slider>
    </div>
  );
};
