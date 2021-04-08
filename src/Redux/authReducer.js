import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA'
export const setUserData = (data) => ({type: SET_USER_DATA, data})

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    auth: false,
}

const authReducer = (authState = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
        let auth = 'id' in action.data.data ? true : false
        return {
            ...authState,
            ...action.data,
            auth,
        }
    
        default: return authState
    }
}
export default authReducer

export const setUserDataThunk = () => {
    return (dispatch) => {
        authAPI.getUserData().then(response=>{
           dispatch(setUserData(response.data))
        })
    }
}
