import City from "./city";
import CityValue from "./cityValue";
import s from "../userInfo.module.css"
function CityWrap () {
    return (
        <div className={s.cityWrap}>
            <City/>
            <CityValue/>
        </div>
    )
}

export default CityWrap