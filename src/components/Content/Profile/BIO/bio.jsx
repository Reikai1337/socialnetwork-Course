import MainInfoWrap from "./UserInfo/mainBioWrap";
import NameAndMarkWrap from "./Header/nameAndMarkerWrap";
import Status from "./Header/status";
import BIOInfoWrap from "./UserInfo/ProfileInfo/infoWrap";
import s from "./bio.module.css"
function Bio (props) {
    return(
        <div className={s.bio}>
            <NameAndMarkWrap
            currentProfile={props.currentProfile} 
            />
            <Status
            currentProfile={props.currentProfile} 
            status={props.status}
            updateStatus={props.updateStatus}

            />
            <MainInfoWrap/>
            <BIOInfoWrap/>
        </div>
    )
}

export default Bio