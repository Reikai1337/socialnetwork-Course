import s from "../avtAndTools.module.css"
import EqualizerIcon from '@material-ui/icons/Equalizer';
function StatButton () {
    return(
        <div className={s.statButton}>
            {/* <span>Stat</span> */}
            <EqualizerIcon />
        </div>
    )
}
export default StatButton