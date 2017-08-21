import ajax from 'axios';
import { getUserList } from '../actions/userListAction';

export const handleInputChange = (name, value) => {
  return {
    'type' : 'INPUT_CHANGE',
    'name' : name,
    'value': value
  };
};

export const handleSignIn = () => {
  return {
    'type' : 'SIGN_IN'
  };
};

export const handleSignOn = () => {
  return async (dispatch, getState) => {
    const resp = await ajax.post(
      '/api/user',
      {
        'username'  : getState().userPage.login.username,
        'email'     : getState().userPage.login.email,
        'password'  : getState().userPage.login.password,
        'isRemember': getState().userPage.login.isRemember,
      });
    console.log(resp);
    dispatch ({
      'type': 'SIGN_ON',
      'resp': resp.data
    });
    dispatch(getUserList());
  };
};
