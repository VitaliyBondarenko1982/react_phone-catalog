import { useEffect, useState } from 'react';

import { getPhones } from '../../api';
import { Catalog } from '../../components';
import { Product } from '../../types';

const Phones = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  return <Catalog products={phones} title="Mobile phones" />;
};

export default Phones;
