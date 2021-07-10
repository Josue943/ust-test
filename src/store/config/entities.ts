import { combineReducers } from 'redux';

import home from '../entities/home';

const rootReducer = combineReducers({ home });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
