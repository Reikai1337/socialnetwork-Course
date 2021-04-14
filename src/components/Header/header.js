import WrapperContainer from "./wrapper";
import s from "./Header.module.css"
import React from "react";
import { connect } from "react-redux";
import {setUserDataThunk} from '../../Redux/authReducer'

class Header extends React.Component {
    componentDidMount(){
        this.props.setUserDataThunk()
    }
    render(){
        return (
            <div className={s.header}>
                 <WrapperContainer 
                    {...this.props}
                 /> 
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        userID: state.auth.data.id
    }
}

export default connect(mapStateToProps,{
    setUserDataThunk,
}
)(Header)