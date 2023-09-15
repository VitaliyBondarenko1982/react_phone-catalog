import { FC, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DropdownValue, ParamsNames } from '../../constants';
import { Product } from '../../types';
import { checkMatchQuery } from '../../utils';
import Filters from '../Filters';
import Pagination from '../Pagination';
import PhoneCard from '../PhoneCard';
import Heading from '../ui/Heading';

import s from './Catalog.module.scss';

interface Props {
  products: Product[];
  title: string;
}
const Catalog: FC<Props> = ({ products, title }) => {
  const [searchParams] = useSearchParams();
  const perPage = +(searchParams.get(ParamsNames.PER_PAGE) || 0);
  const page = +(searchParams.get(ParamsNames.PAGE) || 1);
  const query = searchParams.get(ParamsNames.QUERY);
  const sort = searchParams.get(ParamsNames.SORT);
  const isPagination = !!perPage && products.length > perPage;

  const filteredProducts = useMemo(() => {
    const queryString = query || '';

    if (!queryString.trim()) {
      return products;
    }

    return products.filter(({ name, capacity, ram, screen }) => {
      return [name, capacity, ram, screen].some((value) =>
        checkMatchQuery(value, queryString),
      );
    });
  }, [products, query]);

  const sortedProducts = useMemo(() => {
    if (!sort) {
      return filteredProducts;
    }

    return [...filteredProducts].sort((productA, productB) => {
      switch (sort) {
        case DropdownValue.SORT_BY_AGE:
          return productB.year - productA.year;
        case DropdownValue.SORT_BY_PRICE:
          return productA.price - productB.price;
        case DropdownValue.SORT_BY_NAME:
          return productA.name.localeCompare(productB.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sort]);

  const visiblePhones = useMemo(() => {
    if (!perPage) {
      return sortedProducts;
    }

    const start = perPage * (page - 1);
    const end =
      page * perPage <= sortedProducts.length
        ? page * perPage
        : sortedProducts.length;

    return sortedProducts.slice(start, end);
  }, [sortedProducts, page, perPage]);

  return (
    <div>
      <Heading tag="h1" title={title} className={s.title} />
      <p className={s.amount}>{`${filteredProducts.length} models`}</p>
      <div className={s.filters}>
        <Filters />
      </div>
      <div className={s.list}>
        {visiblePhones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
      {isPagination && (
        <div className={s.pagination}>
          <Pagination
            itemsLength={filteredProducts.length}
            currentPage={page}
            perPage={perPage}
          />
        </div>
      )}
    </div>
  );
};

export default Catalog;
