import PhotoInfoWrapper from "./photoInfoWrap";
import ShowOnMap from "./showOnMap";
import s from "../Gallery.module.css"
function GHeader() {
    return(
        <div className={s.gHeader}>
            <PhotoInfoWrapper/>
            <ShowOnMap/>
        </div>
    )
}

export default GHeader