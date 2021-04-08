import s from "../Gallery.module.css"
function PhotoInfoWrapper() {
    return(
        <div className={s.photoInfoWrap}>
            <span>My photo </span>
            <span className={s.photoCount}>322</span>
        </div>
    )
}

export default PhotoInfoWrapper