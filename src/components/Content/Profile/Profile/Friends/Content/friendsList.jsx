import s from '../friends.module.css'
import Name from './name'
import Photo from './photo'
function FriendsList(){
    return(
        <div className={s.friendsList}>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
            <div className={s.item}>
                <Photo/>
                <Name/>
            </div>
        </div>
    )
}
export default FriendsList