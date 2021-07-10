import { Action } from './actions-types';
import { types } from './types';
import options from './locations';

type HomeState = {
  location: string;
  data: object | null;
  options: Array<any>;
};

const initialState: HomeState = {
  location: '',
  data: null,
  options,
};

const reducer = (state: HomeState = initialState, action: Action): HomeState => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_LOCATION:
      return { ...state, location: payload };

    default:
      return state;
  }
};

export default reducer;
