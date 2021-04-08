import s from "../userInfo.module.css"
function VideoCount() {
    return(
        <div className={s.videoCount}>
            <span className={s.BIOCount}>20</span>
            <span className={s.BIOTags}>Video</span>
        </div>
    )
}
export default VideoCount