import s from "../userInfo.module.css"
function MarksCount() {
    return(
        <div className={s.marksCount}>
            <span className={s.BIOCount}>42</span>
            <span className={s.BIOTags}>Marks</span>
        </div>
    )
}
export default MarksCount