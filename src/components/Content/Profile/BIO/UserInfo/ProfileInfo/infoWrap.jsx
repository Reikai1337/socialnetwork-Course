import FriendsCount from "./friendsCount";
import MarksCount from "./marksCount";
import PhotoCount from "./photoCount";
import SubscribersCount from "./subscribersCount";
import VideoCount from "./videoCount";
import s from "../userInfo.module.css"
function BIOInfoWrap() {
    return(
        <div className={s.BIOInfoWrap}>
            <FriendsCount/>
            <SubscribersCount/>
            <PhotoCount/>
            <MarksCount/>
            <VideoCount/>
        </div>
    )
}
export default BIOInfoWrap