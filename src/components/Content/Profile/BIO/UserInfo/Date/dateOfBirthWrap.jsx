import BirthDate from "./data";
import BirthDateValue from "./dateValue";


import s from "../userInfo.module.css"
function DateOfBirthWrap() {
    return(
        <div className={s.dateOfBirthWrap}>
            <BirthDate/>
            <BirthDateValue/>
        </div>
    )
}
export default DateOfBirthWrap