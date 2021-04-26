import "./index.css";
import store from "./Redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
// }
// renderTree(store.getState())
//state={state} dispatch={store.dispatch.bind(store)}
// store.subscribe(()=>{
// let state = store.getState()
// renderTree(state)
// })
