import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
export const addPostActionCreator = (userName) => ({
  type: ADD_POST,
  userName: userName,
});

const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

const SET_USER_PROFILE = "SET-USER";
export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data });

const CHANGE_FETCHING = "CHANGE-FETCHING";
export const changeFetching = (value) => ({ type: CHANGE_FETCHING, value });

const SET_STATUS = "GET-STATUS";
export const setStatus = (status) => ({ type: SET_STATUS, status });

const UPDATE_STATUS = "UPDATE-STATUS";
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status });

let initialState = {
  postsData: [
    { name: "Rostyslav", postText: "I`m learn JavaScript(", likeCount: 2 },
    { name: "Vanya", postText: "Go smoke hookah", likeCount: 5 },
    { name: "Bodya", postText: "IT,IT,IT-kamasutra!", likeCount: 7 },
  ],
  postText: "Enter here your text",
  currentProfile: null,
  userID: null,
  isFetching: false,
  status: null,
};

const profileReducer = (profilePage = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...profilePage,
        status: action.status,
      };
    case SET_STATUS:
      return {
        ...profilePage,
        status: action.status === null ? "=D" : action.status,
      };
    case CHANGE_FETCHING:
      return {
        ...profilePage,
        isFetching: action.value,
      };
    case SET_USER_PROFILE:
      return {
        ...profilePage,
        currentProfile: { ...action.data },
      };
    case ADD_POST: {
      let post = {
        name: action.userName,
        postText: profilePage.postText,
        likeCount: 0,
      };
      return {
        ...profilePage,
        postsData: [...profilePage.postsData, post],
        postText: "",
      };
    }
    //===============================================================//
    case UPDATE_POST_TEXT: {
      return {
        ...profilePage,
        postText: action.text,
      };
    }
    default:
      return profilePage;
  }
};
export default profileReducer;

export const getProfile = (id) => {
  return (dispatch) => {
    dispatch(changeFetching(true));
    profileAPI.getProfileUser(id).then((response) => {
      dispatch(setUserProfile(response));
      dispatch(changeFetching(false));
    });
  };
};

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((userStatus) => {
      dispatch(setStatus(userStatus));
    });
  };
};

export const updateStatusT = (newStatus) => {
  return (dispatch) => {
    profileAPI.updateStatus(newStatus).then((response) => {
      if (response.data.resultCode === 0) dispatch(updateStatus(newStatus));
    });
  };
};


