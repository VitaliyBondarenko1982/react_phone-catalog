import { useEffect, useState } from 'react';

import { getPhones } from '../../api';
import { Catalog, Loader } from '../../components';
import { IProduct } from '../../types';

const Phones = () => {
  const [phones, setPhones] = useState<IProduct[]>([]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  if (!phones.length) {
    return <Loader />;
  }

  return <Catalog products={phones} title="Mobile phones" />;
};

export default Phones;
