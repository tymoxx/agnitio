import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Errors, Control } from "react-redux-form";
import { bindActionCreators } from "redux";
import LoginForm from "../../components/Forms/LoginForm";
import { authActions } from "../../bus/auth/actions";
import rainmakerLogo from "../../assets/img/rainmaker-logo.png";
import "./styles.css";


class Login extends Component {
  render() {
    return (
      <div className="r-login-page">

        <div className="login-box">
          <div className="login-logo">
            <img className="rainmaker-logo" src={rainmakerLogo} alt=""/>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" disabled/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"/>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" disabled/>
                <span className="glyphicon glyphicon-lock form-control-feedback"/>
              </div>
              <div className="form-group has-feedback">
                <div type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.props.login}>Log In</div>
              </div>

              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <span>Reset password</span>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" disabled/>Remember
                    </label>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authActions }) => ({
  authenticated: authActions.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: authActions.login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
