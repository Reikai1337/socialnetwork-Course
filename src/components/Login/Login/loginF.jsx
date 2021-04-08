import style from './login.module.css'
const LoginF = (props) => {
    return <div className className={style.wrapper}>
        <div className={style.inputMenu}>
            <span>Login</span>
            <input placeholder='Username or email'></input>
            <input placeholder='Password'></input>
            <button>Login</button>

        </div>
    </div>
}
export default LoginF