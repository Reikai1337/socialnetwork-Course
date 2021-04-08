import Name from "./name";
import NetworkStatus from "./networkStatus";
import s from "./BioHeader.module.css"
function NameAndMarkWrap(props) {
    return(
        <div className={s.nameAndMarkWrap}>
            <Name
            currentProfile={props.currentProfile} 
            />
            <NetworkStatus/>
        </div>
    )
}

export default NameAndMarkWrap