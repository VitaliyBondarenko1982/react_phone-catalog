import React, { FC, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { SimpleSlider } from '../SimpleSlider';
import { loadPhones as loadPhonesAction } from '../../store/actions';
import { PhonesWithDetails, State } from '../../utils/interfaces';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { PhoneCard } from '../PhoneCard';
import './HomePage.scss';

interface StateProps {
  phones: PhonesWithDetails[];
}

interface DispatchProps {
  loadPhones: () => void;
}

const HomePageTemplate: FC<StateProps & DispatchProps> = ({
  phones,
  loadPhones,
}) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    loadPhones();
  }, [loadPhones]);

  const hotPricePhones = useMemo(() => {
    return [...phones]
      .sort((a, b) => {
        return (b.priceRegular - b.priceDiscount)
           - (a.priceRegular - a.priceDiscount);
      }).slice(0, 12);
  }, [phones]);

  const newPhonesModels = useMemo(() => {
    return [...phones]
      .sort((a, b) => {
        return b.year - a.year;
      }).slice(0, 12);
  }, [phones]);

  return (
    <div className="home home__container">
      <SimpleSlider />
      <section
        className="home__section"
      >
        <h2 className="home__section-title title">Hot prices</h2>
        <Slider {...sliderSettings}>
          {hotPricePhones.map(phone => (
            <PhoneCard phone={phone} key={phone.phoneId} />
          ))}
        </Slider>
      </section>
      <section
        className="home__section"
      >
        <h2 className="home__section-title title">Brand new models</h2>
        <Slider {...sliderSettings}>
          {newPhonesModels.map(phone => (
            <PhoneCard phone={phone} key={phone.phoneId} />
          ))}
        </Slider>
      </section>
    </div>

  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
});

const mapDispatchToProps = {
  loadPhones: loadPhonesAction,
};

export const HomePage = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(HomePageTemplate);
