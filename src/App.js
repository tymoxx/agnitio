import React, { Component } from "react";
import Header from "./components/Header/index";
import Page from "./components/Page";
import Login from "./pages/Login/index";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { authActions } from "./bus/auth/actions";

class App extends Component {


  render() {

    return (
      <div>
        {this.props.authenticated
          ?
          <div className="wrapper">
            <Header/>
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

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

