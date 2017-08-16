import React from 'react';
import { connect } from 'react-redux';
import ajax from 'axios';

import { getUserList } from '../actions/userListAction';
import UserListGroup from '../conponents/UserListGroup';

class UserList extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <UserListGroup userList={this.props.userList} />
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userPage.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: async () => {
      const resp = await ajax.get('/api/users');
      const userList = resp.data;
      dispatch(getUserList(userList));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);