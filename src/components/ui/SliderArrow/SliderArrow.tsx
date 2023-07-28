import { FC } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import { Icons } from '../../../constants';

interface Props {
  onClick: VoidFunction;
  icon: Icons;
  className: string;
}
const SliderArrow: FC<Props> = ({ onClick, icon, className }) => (
  <Button onClick={onClick} type="secondary" className={className}>
    <Icon iconId={icon} />
  </Button>
);

export default SliderArrow;
