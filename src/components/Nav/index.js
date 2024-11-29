import React, { Component } from "react";
import user2 from '../../assets/img/user2-160x160.jpg';
import { Link } from "react-router-dom";

// import "../../assets/fonts/glyphicons-halflings-regular.eot";

class Nav extends Component {



  render() {


    return (
      <div>
        <nav className="navbar navbar-static-top" role="navigation">

          { /* Sidebar toggle button*/}
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={user2} className="user-image" alt="User Image"/>
                  <span className="hidden-xs">{this.props.first_name} {this.props.last_name}</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src={user2} className="img-circle" alt="User Image"/>

                    <p>
                      {this.props.first_name} {this.props.last_name} - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>

                  { /* Menu Body */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                    { /* /.row */}
                  </li>



                  { /* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>

              { /* Control Sidebar Toggle Button */}
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
