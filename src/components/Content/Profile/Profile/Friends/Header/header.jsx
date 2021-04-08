import s from '../friends.module.css'
function Header() {
    return(
        <div className={s.header}>
            <span className={s.friends}>Friends</span>
            <span className={s.friendsCount}>228</span>
        </div>
    )
}
export default Header