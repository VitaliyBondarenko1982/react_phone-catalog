import { useEffect, useMemo, useState } from 'react';

import { getPhones } from '../../api';
import { MainSlider, ProductsSlider, ShopByCategory } from '../../components';
import { ProductCategories } from '../../constants';
import { Phone } from '../../types';

import s from './Home.module.scss';

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
        return b.fullPrice - b.price - (a.fullPrice - a.price);
      })
      .slice(0, 16);
  }, [phones]);

  const newModelPhones = useMemo(() => {
    return [...phones]
      .sort((a, b) => {
        return b.year - a.year;
      })
      .slice(0, 16);
  }, [phones]);

  return (
    <div>
      <MainSlider />
      <div className={s.section}>
        <ProductsSlider products={hotPricePhones} title="Hot prices" />
      </div>
      <div className={s.section}>
        <ShopByCategory amount={categoryAmount} />
      </div>
      <div className={s.section}>
        <ProductsSlider products={newModelPhones} title="Brand new models" />
      </div>
    </div>
  );
};

export default Home;
