import React from "react";
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/helloworld">HelloWorld</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/userPage">UserPage</Link></li>
      </ul>
    );
  }
}
