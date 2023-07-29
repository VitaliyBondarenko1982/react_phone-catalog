import { useEffect, useState } from 'react';
import { MainSlider, ProductsSlider } from '../../components';
import { Phone } from '../../types';

import './home.scss';
import { getPhones } from '../../api';

const Home = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  const slicedPhones = phones.slice(0, 12);

  return (
    <div className="home">
      <MainSlider />
      <ProductsSlider products={slicedPhones} title="Hot prices" />
      <ProductsSlider products={slicedPhones} title="Brand new models" />
    </div>
  );
};

export default Home;
