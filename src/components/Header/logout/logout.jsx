import React from "react";
import style from "./logout.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Logout = (props) => {
  const logout = () => {
    props.logout();
  };
  return (
    <div className={style.loginWrapper}>
      <div className={style.button} onClick={logout}>
      <ExitToAppIcon />
      </div>
    </div>
  );
};

export default Logout;
