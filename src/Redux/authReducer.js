import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
export const setUserData = (data) => ({ type: SET_USER_DATA, data });

const PREPARING_DATA = "PREPARING-DATA";
export const preparingData = () => ({ type: PREPARING_DATA });

const LOGIN_ERROR = "LOGIN-ERROR";
export const loginError = () => ({ type: LOGIN_ERROR });
let initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isFetching: false,
  auth: false,
  error: false,
};

const authReducer = (authState = initialState, action) => {
  switch (action.type) {
    case PREPARING_DATA:
      return {
        ...authState,
        isFetching: !authState.isFetching,
      };
    case LOGIN_ERROR:
      return {
        ...authState,
        error: !authState.error,
      };
    case SET_USER_DATA:
      return {
        ...authState,
        data: { ...action.data.data },
        auth: !authState.auth,
      };

    default:
      return authState;
  }
};
export default authReducer;

export const setUserDataThunk = () => {
  return (dispatch) => {
    authAPI.getUserData().then((response) => {
      if (response.data.resultCode === 0) dispatch(setUserData(response.data));
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    dispatch(preparingData());
    authAPI.login(email, password, rememberMe).then((response) => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(preparingData());
        dispatch(setUserDataThunk());
      } else {
        dispatch(loginError());
        dispatch(preparingData());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0)
        dispatch(
          setUserData({
            data: {
              id: null,
              email: null,
              login: null,
            },
          })
        );
    });
  };
};
