import './dropdown.scss';
import {
  FC, useMemo, useRef, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '../ui';
import { DropdownValue, Icons, ParamsNames } from '../../constants';
import { DropdownOption, SearchParams } from '../../types';
import { useOnClickOutside } from '../../hooks';
import SearchLink from '../SearchLink';
import { getSearchWith } from '../../utils';

interface Props {
  options: DropdownOption[];
  label: string;
  defaultValue?: string;
  paramsName: ParamsNames;
}

const Dropdown: FC<Props> = ({
  label, options, defaultValue, paramsName,
}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const refContainer = useRef<HTMLUListElement>(null);
  const refs = useMemo(() => [refContainer], []);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchField = searchParams.get(paramsName);
  const page = searchParams.get(ParamsNames.PAGE);

  const onToggleDropdown = () => setIsDropdown((prev) => !prev);

  const onCloseDropdown = () => setIsDropdown(false);

  function setSearchWith(params: SearchParams) {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }

  const onSelect = (optionValue: DropdownValue) => () => {
    const pageValue = optionValue ? '1' : null;

    setSearchWith({
      [paramsName]: optionValue || null,
      [ParamsNames.PAGE]:
        paramsName === ParamsNames.PER_PAGE ? pageValue : page,
    });

    setIsDropdown(false);
  };

  useOnClickOutside({ refs, handler: onCloseDropdown, isOpen: isDropdown });

  const selectedOption = options.find((option) => option.value === searchField);

  return (
    <div className="dropdown">
      <label className="dropdown__label">{label}</label>
      <Button
        type="secondary"
        title={selectedOption?.title || defaultValue}
        className="dropdown__button"
        onClick={onToggleDropdown}
        icon={Icons.ARROW_BOTTOM}
      />
      {isDropdown && (
        <ul className="dropdown__options" ref={refContainer}>
          {options.map(({ title, value }) => (
            <li
              key={value}
              className="dropdown__option"
              onClick={onSelect(value)}
              role="presentation"
            >
              <SearchLink
                params={{ [paramsName]: value }}
                className={cn('dropdown__link', {
                  'is-active': searchField ? searchField === value : !value,
                })}
              >
                {title}
              </SearchLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
