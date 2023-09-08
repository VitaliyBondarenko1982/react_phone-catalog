import { FC } from 'react';

import { Icons } from '../../../constants';
import Button from '../Button';

interface Props {
  onClick: VoidFunction;
  icon: Icons;
  className: string;
}
const SliderArrow: FC<Props> = ({ onClick, icon, className }) => (
  <Button
    onClick={onClick}
    icon={icon}
    type="secondary"
    className={className}
  />
);

export default SliderArrow;
