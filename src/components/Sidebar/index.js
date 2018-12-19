import React, { Component } from "react";
import user2 from "../../assets/img/user2-160x160.jpg";
import { Link } from "react-router-dom";

// import { Route, Link } from "react-router-dom";
// import Header from "./components/Header/index";
// import Home from "./pages/Home/index";
// import About from "./pages/About/index";

class Sidebar extends Component {

  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src={user2} className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              {/* Status */}
              <a href="#"><i className="fa fa-circle text-success"/> Online</a>
            </div>
          </div>
          {/* search form (Optional) */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"/>
        </button>
        </span>
            </div>
          </form>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">HEADER</li>
            <li>
              <Link to="/">
                <i className="fa fa-link"/> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fa fa-link"/> <span>About</span>
              </Link>
            </li>

          </ul>
          {/* /.sidebar-menu */}
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Sidebar;
