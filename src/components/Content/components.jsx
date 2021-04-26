import s from "./Content.module.css"
import {Redirect, Route} from 'react-router-dom'
import Communities from "./Communities/Communities";
import Friends from "./Friends/Friends";
import Music from "./Music/Music";
import News from "./News/News";
import Photo from "./Photo/Photo";
import DialogContainer from "./Dialogs/DialogsContainer";
import NavContainer from "./navContainer";
import ContentContainer from "./contentContainer";
import UsersContainer from "./Users/usersContainer";
import LoginContainer from "../Login/Login";
function ContentWrapper(props) {
    return(
        <div className={s.contentWrapper}>
            <NavContainer/>
            <div className={s.mainContent}>
                <Route path='/message' render={()=><DialogContainer/>}/>
                <Route path='/profile/:userID?' render={()=><ContentContainer/>}/>
                <Route path='/communities' render={()=><Communities/>}/>
                <Route path='/friends' render={()=><Friends/>}/>
                <Route path='/music' render={()=><Music/>}/>
                <Route path='/news' render={()=><News/>}/>
                <Route path='/photo' render={()=><Photo/>}/>
                <Route path='/users' render={()=><UsersContainer/>} />
                
                
                <Route path='/login' render={()=><LoginContainer/>} />
                {/* <Redirect to='/profile'/> */}
            </div>
        </div>
    )
}

export default ContentWrapper 