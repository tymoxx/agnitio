import React, { Component } from "react";
import Header from "./components/Header/index";
import Page from "./components/Page";
import Login from "./pages/Login/index";
import connect from "react-redux/es/connect/connect";
import withRouter from "react-router/es/withRouter";
import { bindActionCreators } from "redux";
import { authActions } from "./bus/auth/actions";
import Sidebar from "./components/Sidebar";

class App extends Component {


  render() {

    return (
      <div>
        {this.props.authenticated
          ?
          <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Page/>
          </div>
          :
          <Login/>
        }
      </div>

    );
  }
}

const mapStateToProps = ({ authActions }) => ({
  authenticated: authActions.authenticated
});

export default withRouter(connect(mapStateToProps, null)(App));
