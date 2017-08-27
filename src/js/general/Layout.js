import React from 'react';

import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const Layout = props => (
  <div>
    <Header />
    <NavBar />
    {props.children // eslint-disable-line
    }
    <Footer />
  </div>
);

export default Layout;
