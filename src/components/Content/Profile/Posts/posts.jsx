import Header from "./Header/header";
import MyPostsWrapper from "./My posts/Wrapper/myPostsWrapper";
import s from './posts.module.css'
function Posts(props) {
    return(
        <div className={s.allPosts}>
            <Header/>
            <MyPostsWrapper 
            postData={props.postData}
            addPost={props.addPost}
            />
        </div>
    )
}
export default Posts