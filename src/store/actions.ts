import { Dispatch } from 'redux';

import {LOAD_PHONES, SET_ERROR} from './actionTypes';
import {
  getPhones,
  getDetails,
  getPhone,
  PHONES_URL,
} from '../utils/api';
import {
  Details,
  Phone,
  PhonesWithDetails,
  State,
} from '../utils/interfaces';

export const setPhones = (payload: PhonesWithDetails[]) => ({
  type: LOAD_PHONES,
  payload,
});

export const setError = (payload: boolean) => ({
  type: SET_ERROR,
  payload,
});

export const loadPhones = () => {
  return async(dispatch: Dispatch, getState: () => State) => {
    const { phones } = getState();

    if (phones.length) {
      return;
    }

    try {
      const phonesFromApi = await getPhones<Phone[]>(PHONES_URL);
      const details = await getDetails<Details[]>(phonesFromApi);
      const phonesWithDetails = phonesFromApi.map(phone => ({
        ...phone,
        details: details.find(detail => phone.phoneId === detail.id) as Details,
      }));

      dispatch(setError(false));
      dispatch(setPhones(phonesWithDetails));
      console.log(phonesFromApi);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  };
};
