import s from './header.module.css'
import Navigation from './Navigation/navigation'
import Search from './Search/search'
function Header() {
    return(
        <div className={s.header}>
            <Navigation/>
            <Search/>            
        </div>
    )
}
export default Header