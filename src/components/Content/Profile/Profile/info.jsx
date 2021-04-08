import Bio from "../BIO/bio";
import Gallery from "../Gallery/gallery";
import s from "./Profile.module.css"
import Posts from '../Posts/posts'
import AddPostContainer from "../Addpost/addpostContainer";
function Info(props) {

    return( 
        <div className={s.profileInfo}>
            <Bio
            currentProfile={props.currentProfile}
            status={props.status}
            updateStatus={props.updateStatus}
            /> 
            <Gallery/>
            <AddPostContainer
            postText={props.postText}
            dispatch={props.dispatch}
            />
            <Posts 
            postData={props.postData}
            />
        </div>
    )
}
export default Info