import {NavLink} from 'react-router-dom'
import s from '../items.module.css'
const Item = (props)=>{
    const changeChat = () => {
        props.changeChat(props.userID)
    }
    return(
    <NavLink
        onClick={changeChat}
        to={`/message/${props.userID}`} 
        activeClassName={s.active} >{props.name}
    </NavLink>)}
    
export default Item 