import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  navigation: navigationReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
