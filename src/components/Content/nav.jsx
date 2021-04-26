import s from "./Content.module.css"
import {NavLink} from 'react-router-dom'
import React from "react"

class Navigation extends React.Component {
    toMyProfile(){
        debugger
        this.props.getProfile(15932)
        this.props.getStatus(15932)
    }

    render(){
        return (
        <div className={s.navigation}>
            <ul>
                {this.props.navigation.map((item,id)=>
                <NavLink key={id} to={item.route} activeClassName={s.activeLink}>{item.text}</NavLink>)}
            </ul>
        </div>)
    }
}

export default Navigation 