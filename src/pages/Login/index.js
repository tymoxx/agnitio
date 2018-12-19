import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Errors, Control } from "react-redux-form";
import { bindActionCreators } from "redux";
import LoginForm from "../../components/Forms/LoginForm";
import { authActions } from "../../bus/auth/actions";


class Login extends Component {
  render() {
    // console.log(this.props.auth);

    return (
      <>
        <button onClick={this.props.login}>Login</button>
        {/*<LoginForm/>*/}
      </>
    );
  }
}

const mapStateToProps = ({ authActions }) => ({
  authenticated: authActions.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: authActions.login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
