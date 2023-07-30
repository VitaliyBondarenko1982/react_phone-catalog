import { useEffect, useMemo, useState } from 'react';
import { MainSlider, ProductsSlider, ShopByCategory } from '../../components';
import { Phone } from '../../types';

import './home.scss';
import { getPhones } from '../../api';
import { ProductCategories } from '../../constants';

const Home = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  const categoryAmount = {
    [ProductCategories.PHONES]: phones.length,
  };

  const hotPricePhones = useMemo(() => {
    return [...phones]
      .sort((a, b) => {
        return (b.fullPrice - b.price)
          - (a.fullPrice - a.price);
      }).slice(0, 16);
  }, [phones]);

  const newModelPhones = useMemo(() => {
    return [...phones]
      .sort((a, b) => {
        return b.year - a.year;
      }).slice(0, 16);
  }, [phones]);

  return (
    <div className="home">
      <MainSlider />
      <div className="home__section">
        <ProductsSlider products={hotPricePhones} title="Hot prices" />
      </div>
      <div className="home__section">
        <ShopByCategory
          amount={categoryAmount}
        />
      </div>
      <div className="home__section">
        <ProductsSlider products={newModelPhones} title="Brand new models" />
      </div>
    </div>
  );
};

export default Home;
