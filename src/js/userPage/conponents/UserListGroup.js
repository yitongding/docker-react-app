import React from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap"

const UserListGroup = ({userList}) => {
  const listItems = userList.map((user, idx) => {
    return <ListGroupItem key={idx}>{user.local.username}</ListGroupItem>
  })
  return (
    <ListGroup>
      {listItems}
    </ListGroup>
  )
}

export default UserListGroup