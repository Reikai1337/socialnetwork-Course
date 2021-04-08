import s from "../Profile.module.css"
import defaultPhoto from '../../../../../image/defaultPhoto.png'
function UserPhoto(props){
    return(
        <div className={s.userPhoto}>
            <img alt='NameOfUser' src={props.photo===null ? defaultPhoto : props.photo} />
        </div>
    )
}
export default UserPhoto