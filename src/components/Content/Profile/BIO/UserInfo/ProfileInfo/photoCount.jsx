import s from "../userInfo.module.css"
function PhotoCount() {
    return(
        <div className={s.photoCount}>
            <span className={s.BIOCount}>322</span>
            <span className={s.BIOTags}>Photo</span>
        </div>
    )
}
export default PhotoCount