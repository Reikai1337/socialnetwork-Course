import loaderGIF from '../../image/loader.gif'
import style from './loader.module.css'
const Loader = (props) => {
    return (
        <div className={style.loaderWrapper}>
            <img alt={'Loading...'} className={style.loader} src={loaderGIF}/>
        </div>
    )
}

export default Loader