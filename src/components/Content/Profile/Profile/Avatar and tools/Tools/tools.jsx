import EditButton from "./edit";
import StatButton from "./stat";
import s from "../avtAndTools.module.css"
function ToolsWrapper() {
    return(
        <div className={s.toolsWrapper}>
            <EditButton />
            <StatButton />
        </div>
    )
}
export default ToolsWrapper