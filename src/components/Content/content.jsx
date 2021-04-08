import Info from "./Profile/Profile/info";
import Profile from "./Profile/Profile/profile";
import s from "./Content.module.css"
import Loader from "../common/loader";

function Content(props){ 
    
    return(
        props.profilePage.isFetching ||
        props.profilePage.currentProfile===null
        ?
        <Loader/>
        :
        <div className={s.content}>
            <Profile 
            currentProfile={props.profilePage.currentProfile}
            />
            <Info 
            postData={props.profilePage.postsData}
            postText={props.profilePage.postText}
            dispatch={props.dispatch}
            currentProfile={props.profilePage.currentProfile}
            status={props.status}
            updateStatus={props.updateStatusT}
            />
        </div>
    )
}
export default Content