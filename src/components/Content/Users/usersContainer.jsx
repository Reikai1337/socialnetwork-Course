import { connect } from "react-redux";
import { 
    follow, unfollow, toggleProcess, 
    getUsers, followThunk, unfollowThunk

} from "../../../Redux/usersReducer";

import React from 'react'
import UsersFun from './Fusers'
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { compose } from "redux";


class Users extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.selectedPage,this.props.pageSize)
    }
    changePage = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }
    render() {
            let navArray = []
            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 
            for (let i = 1; i <= pagesCount; i++) {
                navArray.push(i)            
            }
            return ( 
                <UsersFun
                    navArray={navArray}
                    changePage={this.changePage}
                    {...this.props}
                />)

    }   
}
let mapStateToProps = (state) => {
    return { 
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,
        isProcess: state.usersPage.isProcess,
        auth: state.auth.auth
    }
}
// const UsersContainer = connect(mapStateToProps,{
//     follow,
//     unfollow,
//     toggleProcess,
//     getUsers,
//     followThunk,
//     unfollowThunk,
// })(WithAuthRedirect(Users)) 


// export default UsersContainer
export default compose(
    connect(mapStateToProps,{
        follow,
        unfollow,
        toggleProcess,
        getUsers,
        followThunk,
        unfollowThunk,
    }),
    WithAuthRedirect,
)(Users)

