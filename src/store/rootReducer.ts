import { Reducer, Action } from 'redux';
import { State } from '../utils/interfaces';
import {
  LOAD_PHONES,
  SET_ERROR,
  LOAD_PHONE,
} from './actionTypes';

const initialState = {
  phones: [],
  phoneError: false,
  phoneDetails: null,
};

interface CustomAction extends Action {
  type: string;
  payload: any;
}

export const rootReducer: Reducer<State, CustomAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LOAD_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    case LOAD_PHONE:
      return {
        ...state,
        phoneDetails: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        phoneError: action.payload,
      };
    default:
      return state;
  }
};
