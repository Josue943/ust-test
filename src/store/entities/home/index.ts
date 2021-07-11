import countries from 'data/data.json';
import Location from 'types/location';
import Option from 'types/option';
import Weather from 'types/country';
import { Action } from './actionTypes';
import { types } from './types';

type HomeState = {
  locationId: number;
  weather: Weather | null;
  options: Option[];
  favoriteLocations: Location[];
};

const initialState: HomeState = {
  locationId: 0,
  weather: null,
  options: [
    { label: 'Choose a location', value: 0 },
    ...countries.map(({ id, name, country }) => ({
      value: id,
      label: `${name}, ${country}`,
    })),
  ],
  favoriteLocations: [],
};

const reducer = (state: HomeState = initialState, action: Action): HomeState => {
  switch (action.type) {
    case types.SET_LOCATION:
      return { ...state, locationId: +action.payload };

    case types.CLEAR:
      return { ...state, weather: null, locationId: 0 };

    case types.FETCH_DATA:
      return { ...state, weather: action.payload, locationId: 0 };

    case types.SET_FAVORITE:
      return { ...state, favoriteLocations: [...state.favoriteLocations, action.payload] };

    case types.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteLocations: state.favoriteLocations.filter(location => location.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
