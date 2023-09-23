import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPhoneDetails, getPhones } from '../../api';
import { Loader, ProductDetails, ProductsSlider } from '../../components';
import { IProduct, IProductDetails } from '../../types';

const PhoneDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [phone, setPhone] = useState<IProductDetails | null>(null);
  const [phones, setPhones] = useState<IProduct[]>([]);

  useEffect(() => {
    if (!slug) return;

    getPhoneDetails(slug, setPhone);
    getPhones(setPhones);
  }, [slug]);

  const similarPhones = useMemo(() => {
    return phones.slice(0, 12);
  }, [phones]);

  if (!phone) {
    return <Loader />;
  }

  return (
    <>
      <ProductDetails product={phone} />
      <ProductsSlider products={similarPhones} title="You may also like" />
    </>
  );
};

export default PhoneDetails;
