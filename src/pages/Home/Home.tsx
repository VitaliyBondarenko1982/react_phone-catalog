import { useEffect, useState } from 'react';
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

  const slicedPhones = phones.slice(0, 12);

  const categoryAmount = {
    [ProductCategories.PHONES]: phones.length,
  };

  return (
    <div className="home">
      <MainSlider />
      <div className="home__section">
        <ProductsSlider products={slicedPhones} title="Hot prices" />
      </div>
      <div className="home__section">
        <ShopByCategory
          amount={categoryAmount}
        />
      </div>
      <div className="home__section">
        <ProductsSlider products={slicedPhones} title="Brand new models" />
      </div>
    </div>
  );
};

export default Home;
