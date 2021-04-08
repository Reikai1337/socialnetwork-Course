import s from './Content.module.css'
import {Route} from 'react-router-dom'
import UserMassages from './UserMassages/UserMassages'
const Content = (props)=>{

    return(
        <div className={s.content}>
            {props.messageData.map((mData,dialogIndex)=>{
                return <Route path={`/message/${dialogIndex+1}`} 
                    render={()=><UserMassages 
                    mData={mData}
                />} />
            })}
        </div>
    )
}
export default Content