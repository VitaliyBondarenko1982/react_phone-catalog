import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters, Heading, Pagination } from '../../components';
import { Phone } from '../../types';
import { getPhones } from '../../api';
import PhoneCard from '../../components/PhoneCard';
import { ParamsNames } from '../../constants';

import './phones.scss';

const Phones = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [searchParams] = useSearchParams();
  const perPage = +(searchParams.get(ParamsNames.PER_PAGE) || 0);
  const page = +(searchParams.get(ParamsNames.PAGE) || 1);
  const isPagination = !!perPage && phones.length > perPage;

  const visiblePhones = useMemo(() => {
    if (!perPage) {
      return phones;
    }

    const start = perPage * (page - 1);
    const end
      = page * perPage <= phones.length ? page * perPage : phones.length;

    return phones.slice(start, end);
  }, [page, perPage, phones]);

  useEffect(() => {
    getPhones(setPhones);
  }, []);

  return (
    <div className="phones">
      <Heading tag="h1" title="Mobile phones" className="phones__title" />
      <p className="phones__amount">{`${phones.length} models`}</p>
      <div className="phones__filters">
        <Filters />
      </div>
      <div className="phones__list">
        {visiblePhones.map((phone) => (
          <PhoneCard phone={phone} />
        ))}
      </div>
      {isPagination && (
        <div className="phones__pagination">
          <Pagination
            itemsLength={phones.length}
            currentPage={page}
            perPage={perPage}
          />
        </div>
      )}
    </div>
  );
};

export default Phones;
