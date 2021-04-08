import style from './user.module.css'
import defaultPhoto from './../../../../image/defaultPhoto.png'
import { NavLink } from 'react-router-dom'

const User = (props) => {

    const follow = (id) =>{props.followThunk(id)}
    const unfollow = (id) =>{props.unfollowThunk(id)}
    
    let inProcess = props.isProcess
    return(
        <div className={style.main}>
            <div className={style.wrapper1}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img alt='avatar' src={ (props.user.photos.small===null) ? defaultPhoto : props.user.photos.small }/>
                </NavLink>
                <span>{props.user.name}</span>
                {(props.user.followed) ? 
                    <button 
                        disabled={inProcess.includes(props.user.id)} 
                        className={style.unfollowButton} 
                        onClick={()=>{unfollow(props.user.id)}}>Unfollow</button> 
                : 
                    <button 
                        disabled={inProcess.includes(props.user.id)} 
                        className={style.followButton} 
                        onClick={()=>{follow(props.user.id)}} >Follow</button>}
            </div>
        
            <div className={style.infoWrapper}>
                <div className={style.location}>{`City,Country`}</div>
                <div className={style.description}>{props.user.status===null?`status`:props.user.status}</div>
            </div>
            
        </div>
    )
}
export default User 