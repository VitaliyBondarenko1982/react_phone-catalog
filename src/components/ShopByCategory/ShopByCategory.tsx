import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Heading } from '../ui';
import { BY_CATEGORY_ITEMS } from '../../constants';

import { CategoryAmount } from '../../types';
import './shopByCategory.scss';

interface Props {
  amount: CategoryAmount;
}
const ShopByCategory: FC<Props> = ({ amount }) => {
  return (
    <div className="shop-by-category">
      <Heading title="Shop by category" className="shop-by-category__title" />
      <ul className="shop-by-category__list" data-cy="categoryLinksContainer">
        {BY_CATEGORY_ITEMS.map(({
          id, to, category, image,
        }) => (
          <li className="shop-by-category__item" key={id}>
            <Link to={to} className="shop-by-category__image-link">
              <img
                className="shop-by-category__image"
                src={image}
                alt={category}
              />
            </Link>
            <Link to={to} className="shop-by-category__category">
              {category}
            </Link>

            <p className="shop-by-category__amount">{`${amount[id] || 0} models`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByCategory;
