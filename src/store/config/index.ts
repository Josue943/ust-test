import { applyMiddleware, compose, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducer from './entities';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
