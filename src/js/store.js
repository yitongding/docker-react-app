import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';

import reducer from './rootReducer';

const initHistory = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  promise(),
  thunk,
  logger,
  routerMiddleware(initHistory),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;

export const history = syncHistoryWithStore(initHistory, store);
