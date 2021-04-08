import Logo from "./logo";
import Menu from "./menu";
import s from "./Header.module.css"
import LoginFun from "./login/loginFun";
function Wrapper(props) {
    return(
        <div className={s.headerWrapper}>
            <Logo />
            <Menu />
            <LoginFun
            {...props}
            />
        </div>
    )
}
export default Wrapper