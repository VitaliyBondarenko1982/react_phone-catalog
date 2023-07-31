import { useEffect, useRef } from 'react';
import Slider from 'react-slick';

import {
  Icons,
  MAIN_SLIDER_IMAGES,
  MAIN_SLIDER_SETTINGS,
} from '../../constants';
import { noop } from '../../utils';

import { SliderArrow } from '../ui';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import './mainSlider.scss';

const MainSlider = () => {
  const slider = useRef<Slider | null>(null);

  useEffect(() => {
    if (!slider.current) {
      return;
    }

    const timerId = window.setInterval(() => {
      slider.current?.slickNext();
    }, 5000);

    // eslint-disable-next-line consistent-return
    return () => window.clearInterval(timerId);
  }, [slider.current]);

  return (
    <Slider
      ref={slider}
      {...MAIN_SLIDER_SETTINGS}
      className="slider"
      prevArrow={(
        <SliderArrow
          onClick={noop}
          icon={Icons.ARROW_LEFT}
          className=""
        />
      )}
      nextArrow={(
        <SliderArrow
          onClick={noop}
          icon={Icons.ARROW_RIGHT}
          className=""
        />
      )}
    >
      {MAIN_SLIDER_IMAGES.map(image => (
        <div className="slider__item">
          <img
            className="slider__image"
            src={image}
            alt={image}
          />
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
