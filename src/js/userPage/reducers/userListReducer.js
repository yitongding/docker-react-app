const userListReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_LIST':
      return action.userList;

    default:
      return state;
  }
};

export default userListReducer;
