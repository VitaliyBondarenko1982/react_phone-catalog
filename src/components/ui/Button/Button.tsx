import { FC, ReactElement } from 'react';
import cn from 'classnames';

import './button.scss';

interface Props {
  onClick: VoidFunction;
  children: ReactElement;
  type?: 'primary' | 'secondary' | 'rounded' | 'square';
  isDisabled?: boolean;
}
const Button: FC<Props> = ({
  type = 'primary',
  onClick,
  isDisabled = false,
  children,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('button __app-button', type, {
        'is-disabled': isDisabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
