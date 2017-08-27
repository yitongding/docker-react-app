const todoReducer = (
  state = {
    username: '',
    password: '',
    email: '',
    isRemember: false,
  },
  action,
) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default todoReducer;
