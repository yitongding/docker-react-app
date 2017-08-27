import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoReducer from './todo/reducers';
import userPageReducer from './userPage/reducers';

const reducer = combineReducers({
  routing: routerReducer,
  todo: todoReducer,
  userPage: userPageReducer,
});

export default reducer;
