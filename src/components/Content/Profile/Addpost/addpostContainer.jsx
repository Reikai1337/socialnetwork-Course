import { connect } from "react-redux"
import { addPostActionCreator, updatePostTextActionCreator } from "../../../../Redux/profileReducer"
import AddPost from "./postCreator"

// const AddPostContainer = (props) => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let postText = store.getState().profilePage.postText
//                 let addNewPost = (userName) => {
//                     store.dispatch(addPostActionCreator(userName))
//                 } 
//                 let updateText = (text) => {
//                     store.dispatch(updatePostTextActionCreator(text))
//                 }
//                 return <AddPost postText={postText} addNewPost={addNewPost} updateText={updateText} />
//             }
//         }
//     </StoreContext.Consumer>
// }
let mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (userName) => {dispatch(addPostActionCreator(userName))},
        updateText: (text) => {dispatch(updatePostTextActionCreator(text))},
    }
}
const AddPostContainer = connect(mapStateToProps,mapDispatchToProps)(AddPost)
export default AddPostContainer