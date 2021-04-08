import s from "./Header.module.css"
function Menu(){
    return(
        <div className={s.menu}>
            <ul>
                <a href='#0'><li>SomeNav</li></a>
                <a href='#0'><li>SomeNav</li></a>
                <a href='#0'><li>SomeNav</li></a>
                <a href='#0'><li>SomeNav</li></a>
            </ul>   
        </div>
    )
}
export default Menu