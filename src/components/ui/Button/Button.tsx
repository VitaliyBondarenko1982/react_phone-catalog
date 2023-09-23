import { FC } from 'react';
import cn from 'classnames';

import { Icons } from '../../../constants';
import { noop } from '../../../utils';
import Icon from '../Icon';

import s from './Button.module.scss';

interface Props {
  onClick?: VoidFunction;
  icon?: Icons;
  title?: string | number;
  type?: 'primary' | 'secondary' | 'rounded' | 'transparent';
  isDisabled?: boolean;
  isSelected?: boolean;
  className?: string;
}
const Button: FC<Props> = ({
  type = 'primary',
  onClick = noop,
  isDisabled = false,
  isSelected = false,
  className,
  title,
  icon,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn(s.container, className, {
        [s.isDisabled]: isDisabled,
        [s.isSpaceBetween]: !!title && !!icon,
        [s.primary]: type === 'primary',
        [s.secondary]: type === 'secondary',
        [s.transparent]: type === 'transparent',
        [s.selected]: isSelected,
      })}
    >
      {title}
      {icon && <Icon iconId={icon} />}
    </button>
  );
};

export default Button;
