import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/index";

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Link to="/" className="logo">
          { /* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>A</b>LT</span>
          { /* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </Link>
        <Nav/>
      </header>
    );
  }
}

export default Header;
