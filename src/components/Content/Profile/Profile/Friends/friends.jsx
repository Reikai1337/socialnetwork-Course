import FriendsList from './Content/friendsList'
import s from './friends.module.css'
import Header from './Header/header'
function Friends() {
    return(
        <div className={s.friendsWrapper}>
            <Header/>
            <FriendsList/>            
        </div>
    )
}
export default Friends