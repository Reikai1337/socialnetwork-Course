import Logo from "./logo";
import Menu from "./menu";
import s from "./Header.module.css";
import LoginFun from "./login/loginFun";
import LogoutContainer from "./logout/logout";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../Redux/authReducer";

function Wrapper(props) {
  return (
    <div className={s.headerWrapper}>
      <Logo />
      <Menu />
      {props.auth ? <LogoutContainer {...props}/> : <LoginFun />}
    </div>
  );
}

class WrapperContainer extends React.Component {
  render() {
    return <Wrapper {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps, {
  logout,
})(WrapperContainer);
