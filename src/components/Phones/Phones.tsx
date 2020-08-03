import React, {
  FC,
  useEffect,
  lazy,
  Suspense,
  useState,
  useMemo, useCallback,
} from 'react';

import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PhonesWithDetails, State } from '../../utils/interfaces';
import {
  loadPhones as loadPhonesAction,
} from '../../store/actions';
import './Phones.scss';
import { sortDropdown } from '../../utils/constatnts';

interface StateProps {
  phones: PhonesWithDetails[];
}

interface DispatchProps {
  loadPhones: () => void;
}

const LazyPhoneCard = lazy(() => import('../PhoneCard/PhoneCard')
  .then(({ PhoneCard }) => ({ default: PhoneCard })));

const PhonesTemplate: FC<StateProps & DispatchProps> = ({
  phones,
  loadPhones,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSelect, setIsSelect] = useState(false);
  const [sortBy, setSortBy] = useState(sortDropdown[0]);
  const [isOpacity, setIsOpacity] = useState(false);

  useEffect(() => {
    loadPhones();
  }, [loadPhones]);

  const selectClickHandler = () => {
    const select = !isSelect;
    const opacity = !isOpacity;

    setIsOpacity(opacity);

    if (!select) {
      setTimeout(() => {
        setIsSelect(select);
      }, 300);
    } else {
      setIsSelect(select);
    }
  };

  const onEnterSelect = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    const select = !isSelect;

    if (key === 'Enter') {
      setIsSelect(select);
    }
  };

  const onEnterSetSortBy = (
    event: React.KeyboardEvent<HTMLDivElement>,
    value: string,
  ) => {
    // eslint-disable-next-line no-console
    console.log(event, value);
  };

  const escapePressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;

    if (key === 'Escape') {
      setIsSelect(false);
    }
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchQuery(value);
  };

  const sortedPhones = useMemo(() => {
    switch (sortBy) {
      case 'Newest':
        return [...phones].sort((a, b) => b.year - a.year);
      case 'Oldest':
        return [...phones].sort((a, b) => a.year - b.year);
      case 'Price (from low to high)':
        return [...phones].sort((a, b) => a.priceDiscount - b.priceDiscount);
      case 'Price (from high to low)':
        return [...phones].sort((a, b) => b.priceDiscount - a.priceDiscount);
      case 'RAM':
        return [...phones]
          .sort((a, b) => parseInt(b.ram, 10) - parseInt(a.ram, 10));
      case 'Capacity':
        return [...phones]
          .sort((a, b) => parseInt(b.capacity, 10) - parseInt(a.capacity, 10));
      default:
        return phones;
    }
  }, [sortBy, phones]);

  const filteredPhones = useMemo(() => {
    const searchValue = searchQuery.toLowerCase();

    return sortedPhones.filter(phone => {
      return phone.name.toLowerCase().includes(searchValue);
    });
  }, [sortedPhones, searchQuery]);

  const totalPhones = useMemo(() => {
    if (filteredPhones.length || searchQuery) {
      return filteredPhones;
    }

    return sortedPhones;
  }, [sortedPhones, filteredPhones]);

  return (
    <div className="phones__container">
      <div className="breadcrumbs">
        <NavLink
          to="/"
          className="breadcrumbs__home"
          exact
        >
          <svg className="breadcrumbs__icon" width="16" height="16">
            <use href="../../img/sprite.svg#home-icon" />
          </svg>
        </NavLink>
        <span
          className="breadcrumbs__page breadcrumbs__page--current"
        >
          Phones
          <svg className="breadcrumbs__arrow" width="16" height="16">
            <use href="../../img/sprite.svg#chevron-icon" />
          </svg>
        </span>
      </div>
      <h2 className="phones__title title">Mobile phones</h2>
      <p className="phones__amount">
        {totalPhones.length}
        {' '}
        models
      </p>
      <div className="phones__actions">
        <div className="phones__action">
          <p className="phones__action-title">Sort by</p>
          <div
            className="phones__action-field select"
            onClick={selectClickHandler}
            role="menu"
            tabIndex={0}
            onKeyDown={(e) => onEnterSelect(e)}
          >
            <span className="select__text">{sortBy}</span>
            <svg className="select__arrow" width="16" height="16">
              <use href="../../img/sprite.svg#chevron-icon" />
            </svg>
            <div
              className={cx(
                'select__options',
                {
                  visible: isSelect,
                  opacity: isOpacity,
                },
              )}
            >
              {sortDropdown.map(option => (
                <div
                  key={uuidv4()}
                  role="menuitem"
                  tabIndex={0}
                  className="select__option"
                  onClick={() => setSortBy(option)}
                  onKeyPress={(event) => onEnterSetSortBy(event, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="phones__action">
          <p className="phones__action-title">Search</p>
          <label
            htmlFor="search"
            className="phones__action-label"
          >
            <input
              id="search"
              className="phones__action-field search"
              placeholder="iPhone 7"
              value={searchQuery}
              onChange={searchHandler}
            />
            <svg className="search__icon" width="16" height="16">
              <use href="../../img/sprite.svg#search-icon" />
            </svg>
          </label>
        </div>
      </div>
      <Suspense fallback={(
        <div className="phones__loader">
          <Loader
            type="TailSpin"
            color="#89939a"
            height={120}
            width={120}
          />
        </div>
      )}
      >
        <div className="phones__catalog">
          {totalPhones.map(phone => (
            <LazyPhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </Suspense>
      <div
        className={cx('overflow', {
          visible: isSelect,
          opacity: isOpacity,
        })}
        onClick={selectClickHandler}
        onKeyDown={(e) => escapePressHandler(e)}
        role="menu"
        tabIndex={0}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
});

const mapDispatchToProps = {
  loadPhones: loadPhonesAction,
};

export const Phones = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(PhonesTemplate);
