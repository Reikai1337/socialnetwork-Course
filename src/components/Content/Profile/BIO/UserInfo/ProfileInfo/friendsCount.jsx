import s from "../userInfo.module.css"
function FriendsCount() {
    return(
        <div className={s.friendsCount}>
            <span className={s.BIOCount}>228</span>
            <span className={s.BIOTags}>Friends</span>
        </div>
    )
}
export default FriendsCount