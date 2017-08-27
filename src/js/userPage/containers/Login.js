import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { handleInputChange, handleSignIn, handleSignOn } from '../actions/loginAction';
import LoginForm from '../conponents/LoginForm';

const Login = props => (
  <LoginForm {...props} />
);

const mapStateToProps = state => ({
  username: state.userPage.login.username,
  email: state.userPage.login.email,
  password: state.userPage.login.password,
  isRemember: state.userPage.login.isRemember,
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch(handleInputChange(name, value));
  },
  handleSignIn: () => {
    dispatch(handleSignIn());
  },
  handleSignOn: async () => {
    dispatch(handleSignOn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
