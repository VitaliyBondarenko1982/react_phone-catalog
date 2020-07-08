import { Dispatch } from 'redux';

import { LOAD_PHONE, LOAD_PHONES, SET_ERROR } from './actionTypes';
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

export const setPhone = (payload: Details) => ({
  type: LOAD_PHONE,
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
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  };
};

export const loadPhone = (id: string) => {
  return async(dispatch: Dispatch, getState: () => State) => {
    const { phones } = getState();
    if (phones.length) {
      const phoneDetails = phones.find(phone => id === phone.phoneId);
      console.log('phoneDetails', phoneDetails);

      if (phoneDetails) {
        dispatch(setPhone(phoneDetails.details));
      }
    } else {
      getPhone<Details>(id)
        .then(data => {
          dispatch(setPhone(data));
          console.log('data', data);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          dispatch(setError(true));
        });
    }

    dispatch(setError(false));
  };
};
