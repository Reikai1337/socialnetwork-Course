import React from "react";
import Login from "./Login/loginF";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router";
class LoginContainer extends React.Component {
  render() {
    if (this.props.auth) return <Redirect to={`/profile/${this.props.authUserId}`} />;
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    authUserId: state.auth.data.id, 
    auth: state.auth.auth,
    isFetching: state.auth.isFetching,
    error: state.auth.error
  };
};
export default connect(mapStateToProps, {
  login,
})(LoginContainer);
