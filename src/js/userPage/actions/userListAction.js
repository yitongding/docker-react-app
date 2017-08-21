import ajax from 'axios';

export const getUserList = () => {
  return async (dispatch) => {
    const resp = await ajax.get('/api/users');
    const userList = resp.data;
    dispatch ({
      'type': 'GET_USER_LIST',
      userList
    });
  };
};
