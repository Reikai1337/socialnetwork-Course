import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.auth) return <Redirect to='/login'/>
            return <Component {...this.props} /> 
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}