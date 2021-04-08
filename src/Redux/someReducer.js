const EX_ACTION = 'EXAMPLE-ACTION'
export const exampleActionCreator = (someText) => ({type: EX_ACTION, text: someText})

let initialState = {
    home:['City','Street','House','Room',],
    info:{
        gender: 'male',
        age: 19,
        budget: 1337,
    }
}

const someBranchReducer = (state = initialState,action) => {
    switch (action.type) {
        case EX_ACTION:
            state.info.myText = action.text
            console.log(state)
            return state
    
        default: return state
    }
}

export default someBranchReducer