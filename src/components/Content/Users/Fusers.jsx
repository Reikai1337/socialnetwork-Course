import Loader from '../../common/loader'
import User from './User/user'
import style from './users.module.css'
const UsersFun = (props) => {
    return (
        props.isFetching ? 
        <Loader/>
        :
        <div className={style.users}>
            <div className={style.nav}>{
                props.navArray.map((item,index)=>{
                return <span 
                key={index}
                onClick={()=>{props.changePage(item)}}
                className={props.selectedPage===item ? style.selectedPage : undefined}>{item}</span>
            })
            }</div>
            <div className={style.usersWrapper}>
                {props.users.map((user,id)=><User
                key={id}
                follow={props.follow}
                unfollow={props.unfollow}
                user={user}
                isProcess = {props.isProcess}
                toggleProcess = {props.toggleProcess}
                followThunk = {props.followThunk}
                unfollowThunk = {props.unfollowThunk}

                />)}
            </div>
        </div>
    )
} 
export default UsersFun