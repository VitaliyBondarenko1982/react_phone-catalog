import { FC } from 'react';

import { IProductDescription } from '../../../../types';
import { Heading } from '../../../ui';

import s from './Description.module.scss';

interface Props {
  description: IProductDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  capacity: string;
  zoom: string;
  cell: string[];
}

const Description: FC<Props> = ({
  description,
  screen,
  resolution,
  processor,
  ram,
  camera,
  capacity,
  zoom,
  cell,
}) => {
  const techItems = [
    {
      title: 'Screen',
      value: screen,
    },
    {
      title: 'Resolution',
      value: resolution,
    },
    {
      title: 'Processor',
      value: processor,
    },
    {
      title: 'Ram',
      value: ram,
    },
    {
      title: 'Built in memory',
      value: capacity,
    },
    {
      title: 'Camera',
      value: camera,
    },
    {
      title: 'Zoom',
      value: zoom,
    },
    {
      title: 'Cell',
      value: cell.join(', '),
    },
  ];

  return (
    <>
      <div className={s.about}>
        <Heading title="About" tag="h2" className={s.title} />
        <ul>
          {description.map(({ title, text }) => (
            <li className={s.aboutItem}>
              <Heading title={title} tag="h3" className={s.aboutItemTitle} />
              <p className={s.aboutItemText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.tech}>
        <Heading title="Tech specs" tag="h2" className={s.title} />
        <ul className={s.techList}>
          {techItems.map(({ title, value }) => (
            <li className={s.techItem}>
              <span className={s.techTitle}>{title}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Description;
