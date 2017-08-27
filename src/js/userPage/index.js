import React from 'react'; // eslint-disable-line no-unused-vars
import { Row, Col } from 'react-bootstrap';

import Login from './containers/Login';
import UserList from './containers/UserList';

const UserPage = () => (
  <div>
    <Row>
      <Col md={6}>
        <Login />
      </Col>
    </Row>
    <UserList />
  </div>
);

export default UserPage;
