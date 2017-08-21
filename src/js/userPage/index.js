import React from 'react'; // eslint-disable-line no-unused-vars

// import Signin from './containers/Signin'
import Login from './containers/Login';
import UserList from './containers/UserList';
import {Row, Col} from 'react-bootstrap';

const UserPage = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Login />
        </Col>
      </Row>
      <UserList />
    </div>
  );
};

export default UserPage;
