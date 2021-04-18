import s from "../avtAndTools.module.css"
import EditIcon from '@material-ui/icons/Edit';

function EditButton () {
return(
    <div className={s.editButton}>
        {/* <span>Edit</span> */}
        <EditIcon />
    </div>
)
}

export default EditButton