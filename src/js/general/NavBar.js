import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/helloworld">HelloWorld</Link></li>
    <li><Link to="/todo">Todo</Link></li>
    <li><Link to="/userPage">UserPage</Link></li>
  </ul>
);

export default NavBar;
