import s from './content.module.css'
function Content(props) {
    return(
        <div className={s.content}>
            <span>{props.message}</span>
        </div>
    )
}
export default Content