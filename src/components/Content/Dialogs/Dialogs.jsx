import Items from './Dialog Items/items'
import s from './Dialogs.module.css'
import Message from './Message/message'

function Dialogs(props) {
    return(
        <div className={s.dialogs}>
            <Items 
            dialogData={props.dialogPage.dialogData}
            changeChat={props.changeChat}
            />
            <Message 
            messageData={props.dialogPage.messageData}
            dialogText={props.dialogPage.dialogText}
            sendMessage={props.sendMessage}
            updateText={props.updateText}
            clearTextarea={props.clearTextarea}
            />
        </div>
    )
}
export default Dialogs