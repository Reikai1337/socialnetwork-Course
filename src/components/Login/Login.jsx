import React from "react";
import Login from "./Login/loginF";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router";
class LoginContainer extends React.Component {
  render() {
    if (this.props.auth) return <Redirect to={`/profile/${this.props.id}`} />;
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    id: state.auth.data.id,
  };
};
export default connect(mapStateToProps, {
  login,
})(LoginContainer);
