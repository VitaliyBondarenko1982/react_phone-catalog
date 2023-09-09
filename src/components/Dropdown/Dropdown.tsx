import { FC, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import { DropdownValue, Icons, ParamsNames } from '../../constants';
import { useOnClickOutside } from '../../hooks';
import { DropdownOption } from '../../types';
import { getSearchWith } from '../../utils';
import SearchLink from '../SearchLink';
import { Button } from '../ui';

import s from './Dropdown.module.scss';

interface Props {
  options: DropdownOption[];
  label: string;
  defaultValue?: string;
  paramsName: ParamsNames;
}

const Dropdown: FC<Props> = ({ label, options, defaultValue, paramsName }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const refContainer = useRef<HTMLUListElement>(null);
  const refs = useMemo(() => [refContainer], []);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchField = searchParams.get(paramsName);
  const page = searchParams.get(ParamsNames.PAGE);

  const onToggleDropdown = () => setIsDropdown((prev) => !prev);

  const onCloseDropdown = () => setIsDropdown(false);

  const onSelect = (optionValue: DropdownValue) => () => {
    const pageValue = optionValue ? '1' : null;

    setSearchParams(
      getSearchWith(searchParams, {
        [paramsName]: optionValue || null,
        [ParamsNames.PAGE]:
          paramsName === ParamsNames.PER_PAGE ? pageValue : page,
      }),
    );

    setIsDropdown(false);
  };

  useOnClickOutside({ refs, handler: onCloseDropdown, isOpen: isDropdown });

  const selectedOption = options.find((option) => option.value === searchField);

  return (
    <div className={s.container}>
      <label className={s.label}>{label}</label>
      <Button
        type="secondary"
        title={selectedOption?.title || defaultValue}
        className={s.button}
        onClick={onToggleDropdown}
        icon={Icons.ARROW_BOTTOM}
      />
      {isDropdown && (
        <ul className={s.options} ref={refContainer}>
          {options.map(({ title, value }) => (
            <li key={value} onClick={onSelect(value)} role="presentation">
              <SearchLink
                params={{ [paramsName]: value }}
                className={cn(s.link, {
                  [s.isActive]: searchField ? searchField === value : !value,
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
