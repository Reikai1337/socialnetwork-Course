import { NavLink } from 'react-router-dom'
import style from './login.module.css'

const LoginFun = (props) => {
    return(
        <div className={style.loginWrapper}>
            {props.auth ?

            <NavLink to={`/profile/${props.userID}`} className={style.button}>Profile</NavLink>
            :
            <NavLink to={`/login`} className={style.button}>Login</NavLink>}
        </div>
    )
}

export default LoginFun