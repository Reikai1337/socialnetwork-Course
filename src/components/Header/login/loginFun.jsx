import { NavLink } from 'react-router-dom'
import style from './login.module.css'

const LoginFun = (props) => {
    return(
        <div className={style.loginWrapper}>
            <NavLink to={`/login`} className={style.button}>Login</NavLink>
        </div>
    )
}

export default LoginFun