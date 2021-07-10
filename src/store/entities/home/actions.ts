import { Action } from './actions-types';
import { Dispatch } from 'redux';
import { types } from './types';

export const changeLocation = (location: unknown) => ({
  type: types.SET_LOCATION,
  payload: location,
});

export const fetchLocation = (value: string) => {
  return (dispatch: Dispatch<Action>) => {};
};
