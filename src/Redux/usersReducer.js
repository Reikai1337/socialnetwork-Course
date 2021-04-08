import {usersAPI} from '../api/api'


const FOLLOW = 'FOLLOW'
export const follow = (userID) => ({type:FOLLOW, id: userID})

const UNFOLLOW = 'UNFOLLOW'
export const unfollow = (userID) => ({type:UNFOLLOW, id: userID})

const SET_USERS = 'SET-USERS'
export const setUsers = (users) => ({type: SET_USERS, users: users})

const SELECT_PAGE = 'SELECT-PAGE'
export const selectPage = (num) => ({type: SELECT_PAGE, newSelectedPage: num})

const SET_TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT'
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}) 

const CHANGE_FETCHING = 'CHANGE-FETCHING'
export const changeFetching = (value) => ({type: CHANGE_FETCHING,value}) 

const TOGGLE_PROCESS = 'TOGGLE-PROCESS'
export const toggleProcess = (id) => ({type: TOGGLE_PROCESS, id}) 

let initialState = {
    users:[],
    totalUsersCount: 0,
    isProcess: [],
    pageSize: 6,
    selectedPage: 1,
    isFetching: false,
}

const usersReducer = (usersPage = initialState,action) => {
    switch (action.type) {
        //================================================================================
        case TOGGLE_PROCESS:
            return {
                ...usersPage,
                isProcess: 
                (usersPage.isProcess.some(item=>item===action.id)) ? 
                usersPage.isProcess.filter(item=>item!==action.id)
                :
                [...usersPage.isProcess, action.id]
            }
        case CHANGE_FETCHING:
            return {
                ...usersPage,
                isFetching: action.value,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...usersPage,
                totalUsersCount: action.totalUsersCount
            }
        case SELECT_PAGE :
            return {
                ...usersPage,
                selectedPage: action.newSelectedPage,
            }
        case SET_USERS:
            return {
                ...usersPage, 
                users: [...action.users]
            }
        case FOLLOW:
        return {
            ...usersPage,
            users: usersPage.users.map(user=>{
                return (user.id===action.id) ? {...user, followed: true} : user
            })
        }
        case UNFOLLOW: 
        return {
            ...usersPage,
            users: usersPage.users.map(user=>{
                return (user.id === action.id) ? {...user, followed: false} : user 
            })
        }
        //================================================================================
        default: return usersPage
    }
}
export default usersReducer


export const getUsers = (selectedPage,pageSize) => {
    return (dispatch)=>{
        dispatch(selectPage(selectedPage))
        dispatch(changeFetching(true))
        usersAPI.getUsers(selectedPage,pageSize)
        .then(response=>{
            dispatch(setTotalUsersCount(response.totalCount>100 ? 100 : 100))
            dispatch(setUsers(response.items))
            dispatch(changeFetching(false))
        })
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleProcess(userID))
        usersAPI.follow(userID).then(response => {
            if(response.data.resultCode === 0) { 
                dispatch(follow(userID))
            }
            dispatch(toggleProcess(userID)) 
        })
    }
} 
export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleProcess(id))
        usersAPI.unfollow(id).then(response => { 
            if(response.data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleProcess(id))
        })
    }
}