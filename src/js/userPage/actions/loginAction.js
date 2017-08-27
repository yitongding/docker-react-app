import ajax from 'axios';
import { getUserList } from '../actions/userListAction';

export const handleInputChange = (name, value) => ({
  type: 'INPUT_CHANGE',
  name,
  value,
});

export const handleSignIn = () => ({
  type: 'SIGN_IN',
});

export const handleSignOn = () => async (dispatch, getState) => {
  const resp = await ajax.post(
    '/api/user',
    {
      username: getState().userPage.login.username,
      email: getState().userPage.login.email,
      password: getState().userPage.login.password,
      isRemember: getState().userPage.login.isRemember,
    },
  );
  dispatch({
    type: 'SIGN_ON',
    resp: resp.data,
  });
  dispatch(getUserList());
};
