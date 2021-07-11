import Weather from 'types/country';
import { types } from './types';

interface LocationAction {
  type: types.SET_LOCATION;
  payload: number;
}

interface ClearAction {
  type: types.CLEAR;
}

interface FetchAction {
  type: types.FETCH_DATA;
  payload: Weather;
}

interface FavoriteAccion {
  type: types.SET_FAVORITE;
  payload: any;
}

interface FavoriteRemoveAction {
  type: types.REMOVE_FAVORITE;
  payload: number;
}

export type Action = LocationAction | ClearAction | FetchAction | FavoriteAccion | FavoriteRemoveAction;
