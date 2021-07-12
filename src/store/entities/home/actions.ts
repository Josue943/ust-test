import { AxiosResponse } from 'axios';

import api from 'api';
import formatData from 'utils/formatData';
import Location from 'types/location';
import { Action } from './actionTypes';
import { Dispatch } from 'redux';
import { types } from './types';

const url = (id: number): string => `weather?id=${id}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

export const changeLocation = (payload: unknown) => ({
  type: types.SET_LOCATION,
  payload,
});

export const clear = () => ({ type: types.CLEAR });

//format the data taking only what we need
export const fetchWeather = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data }: AxiosResponse = await api.get(url(id));
      dispatch({
        type: types.FETCH_DATA,
        payload: formatData(data),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFavorite = (payload: Location) => ({
  type: types.SET_FAVORITE,
  payload,
});

export const removeFavorite = (payload: number) => ({
  type: types.REMOVE_FAVORITE,
  payload,
});
