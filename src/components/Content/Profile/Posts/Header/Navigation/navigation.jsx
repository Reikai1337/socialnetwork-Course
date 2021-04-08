import MyPosts from './My posts/myPosts'
import AllPosts from './All posts/allPosts'
import s from './navigation.module.css'
function Navigation() {
    return(
        <div className={s.navigation}>
            <MyPosts/>
            <AllPosts/>
        </div>
    )
}
export default Navigation