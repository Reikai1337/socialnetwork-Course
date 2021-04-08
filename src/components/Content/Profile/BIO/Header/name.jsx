import s from "./BioHeader.module.css"
function Name(props) {
    // debugger
    return(
        <div className={s.name}>
            <span>{`${props.currentProfile.fullName}`}</span>
        </div>
    )
}

export default Name