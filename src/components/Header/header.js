import Wrapper from "./wrapper";
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
                 <Wrapper 
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
// let mapDispatchToProps = (dispatch) => {
// return {
        // setUserDataThunk: () => {dispatch(setUserDataThunk())} 
    // }
// }
export default connect(mapStateToProps,{
    setUserDataThunk,
}
)(Header)