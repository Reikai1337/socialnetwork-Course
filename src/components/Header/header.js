import WrapperContainer from "./wrapper";
import s from "./Header.module.css";
import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className={s.header}>
        <WrapperContainer {...this.props} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    userID: state.auth.data.id,
  };
};

export default connect(mapStateToProps)(Header);
