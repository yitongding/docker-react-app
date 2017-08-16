import { combineReducers } from "redux";

import userListReducer from './userListReducer';
import loginReducer from './loginReducer';

const reducer = combineReducers({
  userList: userListReducer,
  login: loginReducer
});

export default reducer;