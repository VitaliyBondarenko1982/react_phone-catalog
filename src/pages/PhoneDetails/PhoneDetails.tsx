import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPhoneDetails } from '../../api';
import { Loader, ProductDetails } from '../../components';
import { IProductDetails } from '../../types';

const PhoneDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [phone, setPhone] = useState<IProductDetails | null>(null);

  useEffect(() => {
    if (!slug) return;

    getPhoneDetails(slug, setPhone);
  }, [slug]);

  if (!phone) {
    return <Loader />;
  }

  return <ProductDetails product={phone} />;
};

export default PhoneDetails;
