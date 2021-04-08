import * as axios from 'axios'
import React from 'react'
import UsersFun from './Fusers'

class Users extends React.Component {
    // constructor(props){
        // super(props)
    // }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setTotalUsersCount(response.data.totalCount>100 ? 100 : 100)
            this.props.setUsers(response.data.items)
        })
    }
    changePage = (pageNumber) => {
        this.props.selectPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let navArray = []
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 
        for (let i = 1; i <= pagesCount; i++) {
            navArray.push(i)            
        }
        return <UsersFun
            navArray={navArray}
            changePage={this.changePage}
            selectedPage={this.props.selectedPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}

        />

    }
    
} 
// export default Users