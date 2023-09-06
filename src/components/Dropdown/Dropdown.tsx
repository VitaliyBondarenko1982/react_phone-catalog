import './dropdown.scss';
import {
  FC, useMemo, useRef, useState,
} from 'react';
import { Button } from '../ui';
import { Icons, DropdownValue } from '../../constants';
import { DropdownOption, ParamsNames } from '../../types';
import { useOnClickOutside } from '../../hooks';

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

  const onToggleDropdown = () => setIsDropdown(prev => !prev);

  const onCloseDropdown = () => setIsDropdown(false);

  const onSelect = (optionValue: DropdownValue) => () => {
    // eslint-disable-next-line no-console
    console.log(optionValue, paramsName);
    setIsDropdown(false);
  };

  useOnClickOutside({ refs, handler: onCloseDropdown, isOpen: isDropdown });

  return (
    <div className="dropdown">
      <label className="dropdown__label">{label}</label>
      <Button
        type="secondary"
        title={defaultValue || options[0].title}
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
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
