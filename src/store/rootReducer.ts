import { Reducer, Action } from 'redux';
import { State } from '../utils/interfaces';
import {
  LOAD_PHONES,
  SET_ERROR,
  LOAD_PHONE, SET_CART_ID, SET_TOTAL_AMOUNT, SET_TOTAL_PRICE,
} from './actionTypes';

const initialState = {
  phones: [],
  phoneError: false,
  phoneDetails: null,
  cart: {},
  totalPrice: 0,
  totalAmount: 0,
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
    case SET_CART_ID:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload.amount,
        },
      };
    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
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
