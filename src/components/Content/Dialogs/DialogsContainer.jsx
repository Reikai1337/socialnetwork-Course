import { connect } from "react-redux"
import { changeChatIndexActionCreator, clearTextareaActinCreator, sendMessageActionCreator, updateDialogTextActionCreator } from "../../../Redux/dialogReducer"
import Dialogs from "./Dialogs"
import React from 'react'
import { Redirect } from "react-router"
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect"

class DialogContainerClass extends React.Component {
    render() {
        if(this.props.auth){
            return <Dialogs
            {...this.props}
            />
        }else return <Redirect to='/login'/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        auth: state.auth.auth
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        changeChat: (chatID) => {dispatch(changeChatIndexActionCreator(chatID))},
        sendMessage:() => {dispatch(sendMessageActionCreator())},
        updateText: (text) => {dispatch(updateDialogTextActionCreator(text))},
        clearTextarea: () => {dispatch(clearTextareaActinCreator())},
    }
}

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(WithAuthRedirect(DialogContainerClass))

export default DialogContainer