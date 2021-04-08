import s from "../userInfo.module.css"
function SubscribersCount() {
    return(
        <div className={s.subscribersCount}>
            <span className={s.BIOCount}>1337</span>
            <span className={s.BIOTags}>Subscribers</span>
        </div>
    )
}
export default SubscribersCount