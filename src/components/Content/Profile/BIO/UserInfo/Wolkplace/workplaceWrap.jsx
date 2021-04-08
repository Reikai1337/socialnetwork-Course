import Workplace from "./workplace";
import WorkplaceValue from "./workplaceValue";
import s from "../userInfo.module.css"
function WorkplaceWrap (){
    return(
        <div className={s.workplaceWrap}>
            <Workplace/>
            <WorkplaceValue/>
        </div>
    )
}

export default WorkplaceWrap