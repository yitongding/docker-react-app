import React from "react";

import Footer from "./Footer"
import Header from "./Header"
import NavBar from "./NavBar"

export default class Layout extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
