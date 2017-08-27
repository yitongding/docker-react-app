import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const propTypes = {
  userList: PropTypes.arrayOf().isRequired,
};

const UserListGroup = ({ userList }) => {
  const listItems = userList.map(
    user => <ListGroupItem key={user.id}>{user.local.username}</ListGroupItem>,
  );
  return (
    <ListGroup>
      {listItems}
    </ListGroup>
  );
};

UserListGroup.propTypes = propTypes;

export default UserListGroup;
