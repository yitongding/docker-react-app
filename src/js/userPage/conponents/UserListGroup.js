import React from "react"; // eslint-disable-line no-unused-vars
import {ListGroup, ListGroupItem} from "react-bootstrap";

const UserListGroup = ({userList}) => {
  const listItems = userList.map((user, idx) => {
    return <ListGroupItem key={idx}>{user.local.username}</ListGroupItem>;
  });
  return (
    <ListGroup>
      {listItems}
    </ListGroup>
  );
};

export default UserListGroup;
