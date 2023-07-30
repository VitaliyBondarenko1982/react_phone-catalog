import './dropdown.scss';
import { FC, useState } from 'react';
import { Button } from '../ui';
import { Icons, DropdownValue } from '../../constants';
import { DropdownOption } from '../../types';

interface Props {
  options: DropdownOption[];
  label: string;
}

const Dropdown: FC<Props> = ({ label, options }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const onToggleDropdown = () => setIsDropdown(prev => !prev);

  const onSelect = (optionValue: DropdownValue) => () => {
    // eslint-disable-next-line no-console
    console.log(optionValue);
    setIsDropdown(false);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__label">{label}</label>
      <Button
        type="secondary"
        title="Dropdown"
        className="dropdown__button"
        onClick={onToggleDropdown}
        icon={Icons.ARROW_BOTTOM}
      />
      {isDropdown && (
        <ul className="dropdown__options">
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
