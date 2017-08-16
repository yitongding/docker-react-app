import React from "react"; // eslint-disable-line no-unused-vars

// import Signin from './containers/Signin'
import Login from './containers/Login';
import UserList from './containers/UserList';

const UserPage = () => {
  return (
    <div>
      <Login />
      <UserList />
    </div>
  );
};

export default UserPage;
