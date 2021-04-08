import UserPhoto from "./userPhoto";
import ToolsWrapper from "./Tools/tools";
import s from "./avtAndTools.module.css"
function AvtToolsWrap(props) {
    return(
        <div className={s.AvtToolsWrap}>
            <UserPhoto
            photo={props.photo}
            />
            <ToolsWrapper/>
        </div>
    )
}
export default AvtToolsWrap