import ajax from 'axios';

export const getUserList = () => async (dispatch) => {
  const resp = await ajax.get('/api/users');
  const userList = resp.data;
  dispatch({
    type: 'GET_USER_LIST',
    userList,
  });
};

export default getUserList;
