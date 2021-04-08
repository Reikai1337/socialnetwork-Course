import CityWrap from "./City/cityWrap";
import DateOfBirthWrap from "./Date/dateOfBirthWrap";
import ShowDetailedInfo from "./ShowDetalied/showDetaliedInfo";
import WorkplaceWrap from "./Wolkplace/workplaceWrap";

import s from "./userInfo.module.css"
function MainInfoWrap() {
    return(
        <div className={s.mainInfoWarp}>
            <DateOfBirthWrap/>
            <CityWrap/>
            <WorkplaceWrap/>
            <ShowDetailedInfo/>
        </div>
    )
}
export default MainInfoWrap