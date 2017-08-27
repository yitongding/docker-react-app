import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserList } from '../actions/userListAction';
import UserListGroup from '../conponents/UserListGroup';

const propTypes = {
  getUserList: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf().isRequired,
};

class UserList extends React.Component {
  componentWillMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <UserListGroup userList={this.props.userList} />
    );
  }
}

UserList.propTypes = propTypes;

const mapStateToProps = state => ({
  userList: state.userPage.userList,
});

const mapDispatchToProps = dispatch => ({
  getUserList: async () => {
    dispatch(getUserList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
