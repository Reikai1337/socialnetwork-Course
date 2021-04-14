import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
export const setUserData = (data) => ({ type: SET_USER_DATA, data });

let initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isFetching: false,
  auth: false,
};

const authReducer = (authState = initialState, action) => {
  switch (action.type) {
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
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) dispatch(setUserDataThunk());
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
