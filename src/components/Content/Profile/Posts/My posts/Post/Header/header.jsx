import UserAvatar from "./Avatar/avatar";
import UserName from "./Post info/name";
import s from './header.module.css'
function Header(props) {
    return(
        <div className={s.header}>
            <UserAvatar/>
            <UserName name={props.name}/>
        </div>
    )
}
export default Header