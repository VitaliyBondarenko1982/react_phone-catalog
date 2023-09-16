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
  return (
    <>
      <div className={s.about}>
        <Heading title="About" tag="h2" />
        {description.map(({ title, text }) => (
          <div>
            <Heading title={title} tag="h3" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className={s.tech}>
        <Heading title="Tech specs" tag="h2" />
        <div>
          <div>{screen}</div>
          <div>{resolution}</div>
          <div>{processor}</div>
          <div>{ram}</div>
          <div>{capacity}</div>
          <div>{camera}</div>
          <div>{zoom}</div>
          <div>{cell}</div>
        </div>
      </div>
    </>
  );
};

export default Description;
