import { ChangeEvent, RefObject, useCallback, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';

import { Icons, ParamsNames } from '../../constants';
import { getSearchWith } from '../../utils';
import { Button } from '../ui';

import s from './Search.module.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedQuery = searchParams.get(ParamsNames.QUERY) || '';
  const page = searchParams.get(ParamsNames.PAGE);
  const { pathname } = useLocation();
  const inputRef = useRef<RefObject<HTMLInputElement | null>>(null);

  const [query, setQuery] = useState(appliedQuery);

  const handleQueryChange = (value: string) => {
    setSearchParams(
      getSearchWith(searchParams, {
        [ParamsNames.QUERY]: value.trim() ? value : null,
        [ParamsNames.PAGE]: page ? '1' : page,
      }),
    );
  };

  const handleQueryChangeDebounced = useCallback(
    debounce(handleQueryChange, 1000),
    [],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    handleQueryChangeDebounced(event.target.value);
  };

  const resetQuery = () => {
    setQuery('');
    setSearchParams(
      getSearchWith(searchParams, {
        [ParamsNames.QUERY]: null,
      }),
    );
  };

  const onFocus = () => {
    if (inputRef.current) {
      // TODO investigate reason of ts error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputRef.current.focus();
    }
  };

  return (
    <div className={s.container}>
      <label htmlFor="search" className={s.label}>
        <input
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={inputRef}
          type="text"
          id="search"
          onChange={onChange}
          value={query}
          placeholder={`Search in ${pathname.slice(1)}...`}
          className={s.input}
        />
      </label>
      <div className={s.icon}>
        <Button
          onClick={query ? resetQuery : onFocus}
          type="transparent"
          icon={query ? Icons.CLOSE : Icons.SEARCH}
        />
      </div>
    </div>
  );
};

export default Search;
