import { applyMiddleware, createStore, compose } from "redux";
import { syncHistoryWithStore, routerReducer, routerMiddleware } from "react-router-redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createBrowserHistory, createHashHistory } from "history";

import reducer from "./rootReducer";
// import DevTools from "./general/DevTools";

const initHistory = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  promise(), 
  thunk, 
  logger,
  routerMiddleware(initHistory)
];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  // DevTools.instrument(),
  ...enhancers
);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;

export const history = syncHistoryWithStore(initHistory, store);
