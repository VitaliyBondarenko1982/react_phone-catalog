import { FC } from 'react';
import cn from 'classnames';
import { getNumbers } from '../../utils';
import SearchLink from '../SearchLink';
import { Icons, ParamsNames } from '../../constants';
import './pagination.scss';
import { Button } from '../ui';

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
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <SearchLink
            params={{
              [ParamsNames.PAGE]: isFirstPage
                ? `${currentPage}`
                : `${currentPage - 1}`,
            }}
            className={cn('pagination__link', {
              'is-disabled': isFirstPage,
            })}
          >
            <Button
              type="secondary"
              icon={Icons.ARROW_LEFT}
              isDisabled={isFirstPage}
            />
          </SearchLink>
        </li>
        {pages.map((page) => (
          <li key={page} className="pagination__item">
            <SearchLink
              params={{ [ParamsNames.PAGE]: `${page}` }}
              className={cn('pagination__link', {
                'is-active': currentPage === page,
              })}
            >
              <Button
                type={currentPage === page ? 'primary' : 'secondary'}
                title={page}
                className="pagination__button"
              />
            </SearchLink>
          </li>
        ))}
        <li className="pagination__item">
          <SearchLink
            params={{
              [ParamsNames.PAGE]: isLastPage
                ? `${currentPage}`
                : `${currentPage + 1}`,
            }}
            className={cn('pagination__link', {
              'is-disabled': isLastPage,
            })}
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
