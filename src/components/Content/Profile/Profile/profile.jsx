import AvtToolsWrap from "./Avatar and tools/avtAndToolsWrap"
import FriendsList from "./Friends/friends"
import s from "./Profile.module.css"
function Profile(props){
    return(
        <div className={s.profile}>            
            <AvtToolsWrap 
                photo={props.currentProfile.photos.large}
            />    
            <FriendsList/>
        </div>
    )
}
export default Profile