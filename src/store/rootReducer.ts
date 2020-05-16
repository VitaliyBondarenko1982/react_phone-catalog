import { Reducer, Action } from 'redux';
import { State } from '../utils/interfaces';

const initialState = {
  phones: [],
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
    default:
      return state;
  }
};
