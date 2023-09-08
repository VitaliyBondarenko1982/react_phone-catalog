import { FC } from 'react';

import { Icons, ParamsNames } from '../../constants';
import { getNumbers } from '../../utils';
import SearchLink from '../SearchLink';
import { Button } from '../ui';

import s from './Pagination.module.scss';

interface Props {
  itemsLength: number;
  currentPage: number;
  perPage: number;
}

const Pagination: FC<Props> = ({ itemsLength, currentPage, perPage }) => {
  const pagesCount = Math.ceil(itemsLength / perPage);
  const pages = getNumbers(1, pagesCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <SearchLink
            params={{
              [ParamsNames.PAGE]: isFirstPage
                ? `${currentPage}`
                : `${currentPage - 1}`,
            }}
          >
            <Button
              type="secondary"
              icon={Icons.ARROW_LEFT}
              isDisabled={isFirstPage}
            />
          </SearchLink>
        </li>
        {pages.map((page) => (
          <li key={page} className={s.item}>
            <SearchLink params={{ [ParamsNames.PAGE]: `${page}` }}>
              <Button
                type={currentPage === page ? 'primary' : 'secondary'}
                title={page}
                className={s.button}
              />
            </SearchLink>
          </li>
        ))}
        <li className={s.item}>
          <SearchLink
            params={{
              [ParamsNames.PAGE]: isLastPage
                ? `${currentPage}`
                : `${currentPage + 1}`,
            }}
          >
            <Button
              type="secondary"
              icon={Icons.ARROW_RIGHT}
              isDisabled={isLastPage}
            />
          </SearchLink>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
