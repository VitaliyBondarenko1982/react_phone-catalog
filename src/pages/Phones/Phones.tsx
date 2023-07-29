import { useEffect, useState } from 'react';
import { Heading } from '../../components';
import { Phone } from '../../types';
import { getPhones } from '../../api';
import PhoneCard from '../../components/PhoneCard';

import './phones.scss';

const Phones = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  return (
    <div className="phones">
      <Heading
        tag="h1"
        title="Mobile phones"
        className="phones__title"
      />
      <p className="phones__amount">{`${phones.length} models`}</p>
      <div className="phones__filters">Filters</div>
      <div className="phones__list">
        {phones.map(phone => (
          <PhoneCard phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Phones;
