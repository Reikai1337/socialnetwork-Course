import React from 'react'
import { connect } from "react-redux"
import Content from "./content"
import { 
    setUserProfile,changeFetching, getProfile,
    getStatus, updateStatusT,
} from '../../Redux/profileReducer'

import { withRouter } from 'react-router'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'

class Profile extends React.Component {
    componentDidMount(){ 
        if(this.props.match.params.userID!==undefined){
            this.props.getProfile(this.props.match.params.userID)
            this.props.getStatus(this.props.match.params.userID)
        }
    }
    render(){
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        auth: state.auth.auth
    }
}

const ContentContainer = compose(
    connect(mapStateToProps,{
        setUserProfile,
        changeFetching,
        getProfile,
        getStatus,
        updateStatusT,
    }),
    WithAuthRedirect,
    withRouter, 
)(Profile)

export default ContentContainer