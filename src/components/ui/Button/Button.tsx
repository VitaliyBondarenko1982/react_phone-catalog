import { FC } from 'react';
import cn from 'classnames';

import './button.scss';
import { noop } from '../../../utils';
import Icon from '../Icon';
import { Icons } from '../../../constants';

interface Props {
  onClick?: VoidFunction;
  icon?: Icons;
  title?: string | number;
  type?: 'primary' | 'secondary' | 'rounded';
  isDisabled?: boolean;
  className?: string;
}
const Button: FC<Props> = ({
  type = 'primary',
  onClick = noop,
  isDisabled = false,
  className,
  title,
  icon,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('button', className, type, {
        'is-disabled': isDisabled,
        'is-space-between': !!title && !!icon,
      })}
    >
      {title}
      {icon && <Icon iconId={icon} />}
    </button>
  );
};

export default Button;
