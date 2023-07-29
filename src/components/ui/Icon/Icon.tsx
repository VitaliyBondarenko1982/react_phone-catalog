import { FC } from 'react';
import cn from 'classnames';

import './icon.scss';

interface Props {
  iconId: string;
  className?: string;
}
const Icon: FC<Props> = ({
  iconId,
  className,
}) => {
  return (
    <svg className={cn('icon', '__app-icon', className)}>
      <use href={`img/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
