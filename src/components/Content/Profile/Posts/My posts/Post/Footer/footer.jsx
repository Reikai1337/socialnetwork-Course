import s from './footer.module.css'
function Footer(props) {
    return(
        <div className={s.footer}>
            <span>{props.likeCount}</span>
            <button>Like</button>
        </div>
    )
}
export default Footer