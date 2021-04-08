import { connect } from "react-redux"
import Navigation from "./nav"
import {getProfile,getStatus} from '../../Redux/profileReducer'
let stateToProps = (state) =>({navigation:state.navigation})
const NavContainer = connect(stateToProps,{
    getProfile,
    getStatus
})(Navigation)
export default NavContainer