import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ContentWrapper from "./components/Content/components";
import Header from "./components/Header/header";
import React from "react";
import { initializeApp } from "./Redux/appReducer";
import { connect } from "react-redux";
import Loader from "./components/common/loader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
      return <Loader/>
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <ContentWrapper />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
};

export default connect(mapStateToProps, { initializeApp })(App);
