import { FC } from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface Props {
  title: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Heading: FC<Props> = ({ title, tag, className }) => {
  const Tag = tag || 'h2';

  return <Tag className={cn(s.container, className)}>{title}</Tag>;
};

export default Heading;
