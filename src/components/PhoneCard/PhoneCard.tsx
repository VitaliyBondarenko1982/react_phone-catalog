import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_URL } from '../../utils/api';
import { PhonesWithDetails } from '../../utils/interfaces';

import './PhoneCard.scss';

interface Props {
  phone: PhonesWithDetails;
}

export const PhoneCard: FC<Props> = ({ phone}) => (
  <div className="card catalog__card">
    <NavLink
      to={`/phones/${phone.phoneId}`}
      exact
      className="card__link"
    >
      {phone.name}
    </NavLink>
  </div>
);
