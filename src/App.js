import React, { Component } from "react";
import Header from "./components/Header/index";
import Page from "./components/Page";
import Login from "./pages/Login/index";
import connect from "react-redux/es/connect/connect";
import withRouter from "react-router/es/withRouter";
import { bindActionCreators } from "redux";
import { authActions } from "./bus/auth/actions";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {


  render() {

    const { first_name, last_name } = this.props;

    return (
      <div>
        {this.props.authenticated
          ?
          <div className="wrapper">
            <Header
              first_name={first_name}
              last_name={last_name}
            />
            <Sidebar
              first_name={first_name}
              last_name={last_name}
            />
            <Page/>
            <Footer/>
          </div>
          :
          <Login/>
        }
      </div>

    );
  }
}

const mapStateToProps = ({ authActions }) => ({
  authenticated: authActions.authenticated,
  first_name: authActions.user.first_name,
  last_name: authActions.user.last_name

});

export default withRouter(connect(mapStateToProps, null)(App));
