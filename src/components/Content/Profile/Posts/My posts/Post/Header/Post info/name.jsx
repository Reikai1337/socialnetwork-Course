import s from './name.module.css'
function UserName(props) {
    return(
        <div className={s.userName}>
            <span>{`${props.name}`}</span>
        </div>
    )
}
export default UserName