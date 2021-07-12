import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import home from '../entities/home';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['home'],
};

//persist data only from favorites
const persistConfig = {
  key: 'home',
  storage,
  whitelist: ['favoriteLocations'],
};

const rootReducer = combineReducers({
  home: persistReducer(persistConfig, home),
});

export default persistReducer<RootState>(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
