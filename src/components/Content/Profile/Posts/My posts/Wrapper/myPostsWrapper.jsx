import Post from '../Post/post'
import s from './myPostsWrapper.module.css'
function MyPostsWrapper(props) {
    return(
        <div className={s.postsWrapper}>
            {props.postData.map((post,index)=>{
                return(
                    <Post 
                    key={index}
                    name={post.name} 
                    message={post.postText} 
                    likeCount={post.likeCount}
                    addPost={props.addPost}
                    />
                )
            })}
        </div>
    )
}
export default MyPostsWrapper