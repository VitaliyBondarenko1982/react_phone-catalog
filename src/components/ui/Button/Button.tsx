import { FC, ReactElement } from 'react';
import cn from 'classnames';

import './button.scss';

interface Props {
  onClick: VoidFunction;
  children: ReactElement;
  type?: 'primary' | 'secondary' | 'rounded';
  isDisabled?: boolean;
  className?: string;
}
const Button: FC<Props> = ({
  type = 'primary',
  onClick,
  isDisabled = false,
  children,
  className,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('button __app-button', className, type, {
        'is-disabled': isDisabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
