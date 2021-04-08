
const CHANGE_NAVIGATION = 'CHANGE-NAVIGATION' 
export const changeAllNavigation = (ending) => ({type:CHANGE_NAVIGATION, newEnd: ending})

let initialState = [
    {route:'/profile/15932',text:'My page'},
    {route:'/users',text:'Users'},
    {route:'/message',text:'Message'},
    {route:'/friends',text:'Friends'},
    {route:'/communities',text:'Communities'},
    {route:'/photo',text:'Photo'},
    {route:'/music',text:'Music'},
]
const navigationReducer = (navigation = initialState,action) => {
    switch(action.type){
        //================================//

        //================================//
        default: return navigation
        //================================//
    }
}
export default navigationReducer