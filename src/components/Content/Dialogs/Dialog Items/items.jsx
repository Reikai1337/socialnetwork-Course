import s from './items.module.css'
import Item from './Item/Item'

function Items(props) {
    return(
        <div className={s.items}>
            {props.dialogData.map((user)=><Item 
            changeChat={props.changeChat}
            userID={user.userID} 
            name={user.name}
            dispatch={props.dispatch}
            />)}
        </div>
    )
}
export default Items