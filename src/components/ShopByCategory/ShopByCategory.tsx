import { FC } from 'react';
import { Link } from 'react-router-dom';

import { BY_CATEGORY_ITEMS } from '../../constants';
import { CategoryAmount } from '../../types';
import { Heading } from '../ui';

import s from './ShopByCategory.module.scss';

interface Props {
  amount: CategoryAmount;
}
const ShopByCategory: FC<Props> = ({ amount }) => {
  return (
    <div>
      <Heading title="Shop by category" className={s.title} />
      <ul className={s.list} data-cy="categoryLinksContainer">
        {BY_CATEGORY_ITEMS.map(({
          id, to, category, image,
        }) => (
          <li className={s.item} key={id}>
            <Link to={to} className={s.link}>
              <img src={image} alt={category} />
            </Link>
            <Link to={to} className={s.category}>
              {category}
            </Link>

            <p className={s.amount}>{`${amount[id] || 0} models`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByCategory;
