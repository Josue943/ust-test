import { types } from './types';

interface LocationAction {
  type: types.SET_LOCATION;
  payload: string;
}

export type Action = LocationAction;
