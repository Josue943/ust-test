import { applyMiddleware, createStore, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import reducer from './entities';

const middlewares: Array<ThunkMiddleware> = [thunk];

export const store: Store = createStore(reducer, applyMiddleware(...middlewares));
