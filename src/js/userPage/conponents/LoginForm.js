import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel } from 'react-bootstrap';


const propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  handleSignOn: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isRemember: PropTypes.bool.isRequired,
};

const LoginForm = ({
  handleSignIn,
  handleSignOn,
  handleInputChange,
  username,
  email,
  password,
  isRemember,
}) => (
  <Form horizontal>
    <FormGroup controlId="formEmail">
      <Col componentClass={ControlLabel} sm={2}>
          Username
      </Col>
      <Col sm={10}>
        <FormControl
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId="formEmail">
      <Col componentClass={ControlLabel} sm={2}>
          Email
      </Col>
      <Col sm={10}>
        <FormControl
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </Col>
    </FormGroup>

    <FormGroup controlId="formPassword">
      <Col componentClass={ControlLabel} sm={2}>
          Password
      </Col>
      <Col sm={10}>
        <FormControl
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox
          name="isRemember"
          checked={isRemember}
          onChange={handleInputChange}
        >
            Remember me
        </Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Col sm={2}>
          <Button type="button" onClick={handleSignIn}>
              Sign in
          </Button>
        </Col>
        <Col sm={2}>
          <Button type="button" onClick={handleSignOn}>
              Sign on
          </Button>
        </Col>
      </Col>
    </FormGroup>
  </Form>
);

LoginForm.propTypes = propTypes;

export default LoginForm;
