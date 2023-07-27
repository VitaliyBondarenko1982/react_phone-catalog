import { FC } from 'react';
import cn from 'classnames';

import './icon.scss';

interface Props {
  iconId: string;
}
const Icon: FC<Props> = ({
  iconId,
}) => {
  return (
    <svg className={cn('icon', '__app-icon')}>
      <use href={`img/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
